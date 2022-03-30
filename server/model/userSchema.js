const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [{


        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }


    }],
    fmessages: [{


        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }


    }],
    tokens: [
        {
            token : {
                type: String,
                required:true
            }
        }
    ]

})




// Hasing Password

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();

});

// Generating Token
userSchema.methods.generateAuthToken = async function () {
    try{
            let token = jwt.sign({_id: this._id } , process.env.SECRET_KEY);
            this.tokens = this.tokens.concat({token : token});
            await this.save();
            return token;
    }catch(err){
                console.log(err);
    }
}



// SAVE CONTACT DATA 
userSchema.methods.addMessage = async function(name, email, subject, message){

try {
    
this.messages = this.messages.concat({name, email, subject, message});
await this.save();
return this.messages;

} catch (error) {
    console.log(`userSchema error : ${error}`);
    
}

}

// SAVE FEEDBACK DATA 
userSchema.methods.addFeedback = async function(name, email, subject, message){

    try {
        
    this.fmessages = this.fmessages.concat({name, email, subject, message});
    await this.save();
    return this.fmessages;
    
    } catch (error) {
        console.log(`userSchema error : ${error}`);
        
    }
    
    }








const User = mongoose.model('USER', userSchema);

module.exports = User;
