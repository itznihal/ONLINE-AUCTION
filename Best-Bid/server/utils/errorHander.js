class ErrorHander extends Error{

constructor(message , statusCode){
    // SUPER --> ERROR CLASS CONSTRUCTOR
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this , this.constructor);

}

}

module.exports = ErrorHander