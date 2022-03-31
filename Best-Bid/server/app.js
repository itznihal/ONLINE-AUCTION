const dotenv = require('dotenv');
const  mongoose = require('mongoose');
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");

const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors=require("cors");
const stripe=require("stripe")("sk_test_51KVzMySFWvR6XE1YibTsOQVGXXVtCjUY2IvNlXEbzlCTOb0hkngXsvAI2kcExNchbesK4jiTv4cpPCOjMHN7jYgF00TjjjozYy")
const uuid=require("uuid");


dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;


require('./db/conn');


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// const User = require('./model/userSchema');
// app.use(express.json({ limit: "50mb" })); 
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended:true }));
app.use(fileUpload());
app.use(cors());


// HANDLING UNCAUGHT EXCEPTION -> CONSOLE.LOG(UNDEFINE VARIABLE)
process.on("uncaughtException" , err => {
    console.log(`Error : ${err}`);
    console.log(` Server is closing due to Handling Uncaught Error Exception`);

});


// ROUTERS
app.use(require('./router/auth'));
app.use(require('./router/productRoute'));

// MIDDLEWARE FOR ERRORS
app.use(require('./middleware/error'));




// app.get("/", (req, res) => {
//     res.send("Home Page");
// });


// app.get("/about", (req, res) => {
//     res.send("About Page");
// });

// app.get("/profile", (req, res) => {
//     res.send("Profile Page");
// });

// app.get("/service", (req, res) => {
//     res.send("Services");
// });

app.post("/payment"), (req,res)=>{
    const {items, token}=req.body;
    console.log("PRODUCT", items);
    console.log("PRICE",items.price);
    const idempotencykey=uuid() //user can't charge twice

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer=>{
        stripe.charges.create({
            amount: items.price,
            currency: 'usd',
            customer: customer.id, 
            receipt_email: token.email,
            description: `Buy items.name`,
            shipping:{
                name: token.card.name, 
                address:{
                    country:token.card.address_country
                }
            }
        },{idempotencykey})
    })
    .then(result=>res.status(200).json(result))
    .catch(err=>console.log(err))
}


// app.get("/contact", (req, res) => {
//     res.send("cContact Page");
// });


// app.get("/signin", (req, res) => {
//     res.send("Signin Page");
// });

// app.get("/signup", (req, res) => {
//     res.send("SignUp Page");
// });

// app.get("/addlot", (req, res) => {
//     res.send("Add Lot Page");
// });
// app.get("/updatelot", (req, res) => {
//     res.send("Updatelot Page");
// });
// app.get("/lot", (req, res) => {
//     res.send("Updatelot Page");
// });


const server = app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});


// UNHANDLED PROMISE REJECTION ->> IF .ENV CONFIG FILE CHANGE
process.on("unhandledRejection" , err => {
    console.log(`Error : ${err.message}`);
    console.log(`Config file problem sutting down server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
})