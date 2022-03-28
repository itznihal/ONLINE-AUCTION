const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
// const { response } = require("express");

/*THIS FILE IS FOR AUTHENTICATION TOKE VERIFICATION -> AT ANI TIME USER ID MUSTR BE VERIFY WITH CURRENT TOKE  ID THEN ONLY WE CAN RETRAIN INFORMATION FROM CURRRENT USER ID*/

const authenticate = async (req, res, next) => {

try {

    // HERE WE GET CURRENT TOKEN FROM JWT TOKEN
    const token =  req.cookies.jwtoken;
    // console.log("sdsdsd");


// TO VERIFY TOKEN -> verify() FUNCTION CALLED INSIDE JWT
const verifyToken = jwt.verify(token , process.env.SECRET_KEY);

// HERE WE GOT ALL INFORMATION ABOUT CURRENT USER INSIDE rootUser
const rootUser  = await User.findOne({ _id: verifyToken._id , "tokens.token": token});
// For test

if(!rootUser){    throw new Error('User Not Found')}

// TO USE THAT CURRRENT USER INFORMATION INSIDE THE PROFILE PAGE WE ARE STORING IT 
// ALL DATAV STORES IN req.rootUser
// console.log(`start root usr`);
// console.log(rootUser);
// console.log(`end root usr`);
req.token = token;
req.rootUser = rootUser;
req.userID = rootUser._id;

// NEXT FUNCTION CALLED AFTER MIDDLEWARE
next();


} catch (err) {
    console.log(`error token verification`);
    res.status(401).send('Unorthorised: No token provided');
}



}


module.exports = authenticate;