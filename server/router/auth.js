const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Router js is called`);
});

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(400).json({ error: "Fill all Require Feild Properly " });
    }

    if(password.length < 8) {
        return res.status(400).json({ error: "password should be minimum 8 characters" });
}

    try {

        const userExist = await User.findOne({ email: email });



        if (userExist) {
            return res.status(400).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(400).json({ error: "password is not matching" })

        } else {

            const user = new User({ name, email, phone, password, cpassword });

            // Hashing is Used


            await user.save();

            res.status(201).json({ message: " User register successfuly" });


        }



    } catch (err) {

        console.log(err);
    }




});


//signin

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "invalid credentials" });
        }

          if(password.length < 8) {
            return res.status(400).json({ error: "invalid credentials" });
}
console.log(password.length);
        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);





            if (!isMatch) {
                res.status(400).json({ error: "invalid credential" });
            } else {
                token = await userLogin.generateAuthToken();
                console.log(token);
                
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.json({ message: "user sign in successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid Credential" })
        }




    } catch (err) {
        console.log(err);
    }

});




// ABOUT US PAGE ROUTE
// we have to use authenticatrion middleware at about page -> inserting authenticate function inside thi app.get function

router.get('/about', authenticate , (req, res) => {
    console.log(`about us page`);
    // req.rootUser -> Sending Currently logged in person profile 
    res.send(req.rootUser);
});



// FOR GET USERDATA

router.get('/getdata', authenticate , (req, res) => {
    console.log(`about us page`);
    // req.rootUser -> Sending Currently logged in person profile 
    res.send(req.rootUser);
});


//CHANGE PASSWORD ROUTE

router.put('/password/update', authenticate , async (req, res) => {

    // req.rootUser -> Sending Currently logged in person profile 
    try{

   const user = await User.findById( req.userID ).select("+password");

//   const isPasswordMatched = await bcrypt.compare(password, userLogin.password);
// req.body.oldPassword

const isPasswordMatched = await bcrypt.compare(req.body.oldPassword , user.password);

   if(!isPasswordMatched){
    res.status(400).json({ error: "old password incorrect" });
   }


   if( req.body.newPassword !==req.body.confirmPassword){
    res.status(400).json({ error: "Password does not matched" });
   }

   user.password =req.body.newPassword;

   await user.save();

   res.status(200).send(req.token);




    } catch (error) {
        console.log(`Password reset error : ${error}`);
    }
});





//UPDATE USER PROFILE

router.put('/me/update', authenticate , async (req, res) => {
console.log(req.body.name , req.body.email ,req.body.phone  );
    // req.rootUser -> Sending Currently logged in person profile 
    try{

const newUserData = {

    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,

}



   const user = await User.findByIdAndUpdate( req.userID , newUserData, {
       new: true,
       runValidators : true,
       userFindAndModify : false,
   } );


   res.status(200).json({success : true});




    } catch (error) {
        console.log(`Profile Update error : ${error}`);
        res.status(400).json({ error: "Profile Update Error" });
    }
});













// CONTACT US PAGE 
router.post('/contact',authenticate , async (req, res) => {
    const {name, email, subject, message} = req.body;
    
    // console.log(`pre testing`);
    // console.log(name);
    // console.log(email);
    // console.log(subject);

    // console.log(message);
try {

    const {name, email, subject, message} = req.body;

    if( !name || !email || !subject || !message ){
        console.log("Error in ciontact form at server side");
        return res.json({ error: "All Feilds must be filled"});
    }


    const userContact = await User.findOne({_id:req.userID});

    if(userContact){

        const userMessage = await userContact.addMessage(name, email, subject, message);

        await userContact.save();

        res.status(201).json({message : "User Contact Form Saved Successfully"});
    }
    
} catch (error) {
    console.log(`auth file error : ${error}`);
}

});


// LOGOUT PAGE FUNCTIONALITY
// IN LOGOUT FUNCTIONALITY -> DELETE AVTIVE COOKIE -> USE LOOGED OUT

router.get('/logout' , (req, res) => {

    console.log(`logout page from server`);
    res.clearCookie('jwtoken' , {path:'/'});
    res.status(200).send(`User Logout`);


});


module.exports = router;