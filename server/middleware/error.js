const ErrorHandler = require("../utils/errorHander");


module.exports = (err , req , res , next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


// HANDLING  MONGO DB ERROR -> CAST ERROR
if(err.name === "CastError"){
    const message = `Handling Mongo db error Resource Not Found. Invalid : ${err.path}`;
    err = new ErrorHandler(message , 400);
}


    res.status(err.statusCode).json({
        success:false , 
        message : err.message,
});

};