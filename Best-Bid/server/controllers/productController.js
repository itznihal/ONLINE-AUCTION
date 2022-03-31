const Product = require("../model/productModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");




const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

// const authenticate = require("../middleware/authenticate");
// req.rootUser
// CREATE PRODUCT -->> WORKING
exports.createProduct = catchAsyncErrors(async  (req ,res , next) => {
    console.log(`Create Product Function from Route Called`);


try {
    // HERE WE GET CURRENT TOKEN FROM JWT TOKEN
const token =  req.cookies.jwtoken;
    const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
const rootUser  = await User.findOne({ _id: verifyToken._id , "tokens.token": token});
if(!rootUser){    throw new Error('User Not Found')}
req.token = token;
req.rootUser = rootUser;
req.userID = rootUser._id;
} catch (err) {
    console.log(`error token verification`);
    res.status(401).send('Unorthorised: No token provided');
}

let images = [];

if (typeof req.body.images === "string") {
    // Single Image recived

    images.push(req.body.images);

}
else {

    images = req.body.images;

}

const imagesLink = [];

for (let i = 0; i < images.length; i++) {
    
    const result = await cloudinary.v2.uploader.upload( images[i], {
        folder:"products",
    } );

imagesLink.push({
    public_id:result.public_id,
        url: result.secure_url,
});

}

// Uploaded on cloudinary and  links of that images  added into  database
req.body.images = imagesLink;


// console.log(ob2);
console.log(req.body);

    // const product = await Product.create(req.body);

    let product = new Product(req.body);
    product.seller= req.userID;

    await product.save();

    // ADD ROW OF SELLER ID AFTER CREATION -> WE DONT HAVE  -> sSEND ID FROM FRONT END

    res.status(201).json({
        success:true,
        product
    });

});



// GET ALL PRODUCT ->> WORKING 
exports.getAllProducts = catchAsyncErrors(async (req,res, next) => {
// API FEATURE TAKES -> QUERY & QUERYSTR
    const resultPerPage = 9;
const productCount = await Product.countDocuments({ 'bidEnd': { $gt: new Date() }});
// find({ 'bidEnd': { $gt: new Date() }}) -> IF BID ENDED -> NOT SHOWN IN RESULT
    const apiFeature = new ApiFeatures(Product.find({ 'bidEnd': { $gt: new Date() }}).populate('seller', '_id name phone email').populate('bids.bidder', '_id name ') , req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query;

res.status(200).json({
    success:true,
    products,
    productCount,
    resultPerPage,
    });

});

// UPDATE PRODUCTS  ->> WORKING 
exports.updateProduct = catchAsyncErrors(async (req , res , next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product Not Found" , 404));
     }

// AFTER PRODUCT FOUND -> IMAGES START HERE 


let images = [];

if (typeof req.body.images === "string") {
    // Single Image recived

    images.push(req.body.images);

}
else {

    images = req.body.images;

}


if( images !== undefined){

for(let i = 0 ; i<product.images.length ; i++){
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);

}


const imagesLink = [];

for (let i = 0; i < images.length; i++) {
    
    const result = await cloudinary.v2.uploader.upload( images[i], {
        folder:"products",
    } );

imagesLink.push({
    public_id:result.public_id,
        url: result.secure_url,
});

}

req.body.images = imagesLink;



}



    product = await Product.findByIdAndUpdate(req.params.id , req.body , {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
});

// TO DELETE PRODUCT -->> WORKING
exports.deleteProduct = catchAsyncErrors(async (req , res , next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product Not Found" , 404));
     }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted"
    });
});




//GET MY PRODUCTS
exports.getMyProducts = catchAsyncErrors(async (req,res) => {
  
    try {
        // HERE WE GET CURRENT TOKEN FROM JWT TOKEN
    const token =  req.cookies.jwtoken;
        const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
    const rootUser  = await User.findOne({ _id: verifyToken._id , "tokens.token": token});
    if(!rootUser){    throw new Error('User Not Found')}
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    } catch (err) {
        console.log(`error token verification`);
        res.status(401).send('Unorthorised: No token provided');
    }



    let sellerproducts = await Product.find({seller: req.userID}).populate('seller', '_id name phone').populate('bids.bidder', '_id name phone');

    console.log(`myProduct page Called`);
    res.status(200).json({
        success:true,
        sellerproducts
        });
    
    });







    //GET MY BIDDDED PRODUCT ->> BID STATUS
    // getBiddedProduct

    exports.getBiddedProduct = catchAsyncErrors(async (req,res) => {
  
        console.log(`get Bidded product Page called`);
        try {
            // HERE WE GET CURRENT TOKEN FROM JWT TOKEN
        const token =  req.cookies.jwtoken;
            const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
        const rootUser  = await User.findOne({ _id: verifyToken._id , "tokens.token": token});
        if(!rootUser){    throw new Error('User Not Found')}
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        } catch (err) {
            console.log(`error token verification`);
            res.status(401).send('Unorthorised: No token provided');
        }
    
    
    
        let myproducts = await Product.find({ "bids.bidder" : req.userID }).populate('seller', '_id name phone').populate('bids.bidder', '_id name phone');
    
        res.status(200).json({
            success:true,
            myproducts
            });
        
        });







// GET PRODUCT DETAILS
exports.getProductDetails = catchAsyncErrors(async (req , res , next) => {

    const product = await Product.findById(req.params.id).populate('seller', ' _id name phone email').populate('bids.bidder', '_id name phone email');
    const sellerDetails = product.seller;



// Bid Winner
// // const bidWinnner = await Product.find({_id : req.params.id}).sort({"bids.bid" : -1}).limit(1).populate('bids.bidder', '_id name phone');
// var countdownDate = new Date(product.bidEnd).getTime();
//       var now = new Date().getTime();

var winStatus;
// if(countdownDate > now ){
    



// console.log(`Auctiion Not Ended`);
// winStatus = "Auction is Currently Active";
// }
// else{
    // }
    const bidWinnner = product.bids;

    var maxWin = Math.max.apply(Math, bidWinnner.map(function(o) { return o.bid; }));
    
    console.log(maxWin);
    
    
    var result;
    bidWinnner.forEach(function (arrayItem) {
        if(arrayItem.bid === maxWin){
        // console.log(arrayItem);
        // console.log(JSON.stringify(arrayItem));
        // let userObj = JSON.parse(arrayItem);
        result =  arrayItem;
        return;
        }
    });
    
     winStatus = result;
    
    
     
    // console.log(result.bidder);
    // console.log(result.bidder.phone);
    // console.log(result.bidder.email);
    console.log(winStatus);
    
    



    if(!product){
       return next(new ErrorHander("Product Not Found" , 404));
    }

    res.status(200).json({
        success:true,
        product,
        sellerDetails,
        winStatus,
    });

});





// PLACE BID ON PRODUCTS
// placeBidOnProduct

exports.placeBidOnProduct = catchAsyncErrors(async  (req ,res , next) => {
    console.log(`Place Bid  On Product Function from Route Called`);


try {
    // HERE WE GET CURRENT TOKEN FROM JWT TOKEN
const token =  req.cookies.jwtoken;
    const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
const rootUser  = await User.findOne({ _id: verifyToken._id , "tokens.token": token});
if(!rootUser){    throw new Error('User Not Found')}
req.token = token;
req.rootUser = rootUser;
req.userID = rootUser._id;
} catch (err) {
    console.log(`error token verification`);
    res.status(401).send('Unorthorised: No token provided');
}


console.log(req.body);
// This body Contains Product Id and bid Ammount

var bid = {
    bidder : req.userID,
    bid : req.body.bidAmmount,
    time : Date.now(),
}

console.log(bid);

let product = await Product.findById(req.body.productId);

    if(!product){
        return next(new ErrorHander("Product Not Found" , 404));
     }


// UPDATE BID ON PRODUCTS
product = await Product.findByIdAndUpdate(req.body.productId , 
    {
$push : { bids : bid}
    }
   , {
    new:true,
    runValidators:true,
    useFindAndModify:false
});

    res.status(201).json({
        success:true,
        product
    });

});