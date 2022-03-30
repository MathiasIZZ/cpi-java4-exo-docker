import mongoose from "mongoose";

export const setMongoConnection = () => {
    const mongoUrl = `mongodb://${process.env["MONGO_HOST"] || "localhost"}:27017`;

    const MONGO_USERNAME=process.env.MONGO_USERNAME;
    const MONGO_PASSWORD=process.env.MONGO_PASSWORD;
    const MONGO_URL=process.env.MONGO_URL;


    console.log(mongoUrl)
    mongoose.connect(mongoUrl, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            console.error(err);
        } else {
           console.log("Connecté à la base de données"); 
        }
        
    })
} 