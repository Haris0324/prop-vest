// Create connection to our mongodb database:
import mongoose from "mongoose";

let initialized = false;
export const connect = async() => {
    mongoose.set("strictQuery", true);

    if (initialized) {
        console.log("Mongodb already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'prop-vest',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initialized=true;
        console.log('Mongodb connected')
    }
    catch (error) {
        console.log('Mongodb connection error: ', error)
    }
}