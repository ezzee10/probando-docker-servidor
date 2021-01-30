const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const connectDB = async () => {

    const{MONGO_HOSTNAME, MONGO_DB, MONGO_PORT} = process.env;

    const dbConnectionURL = {
        'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
    };

    try{
        await mongoose.connect(dbConnectionURL.LOCALURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB is connected');
    }catch(error){
        console.log(error);
        process.exit(1); //stop app
    }
}

module.exports = connectDB;