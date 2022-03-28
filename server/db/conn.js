const  mongoose = require('mongoose');


const DB = process.env.DATABASE;


mongoose.connect(DB).then( () => {
    console.log(`connection Successful`);
}).catch((err) => console.log(`no connection`));

