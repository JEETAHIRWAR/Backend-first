// import dotenv from 'dotenv';

// dotenv.config({ path: './.env' });
// const result = dotenv.config({ path: './.env' });

// if (result.error) {
//     console.error('Error loading environment variables:', result.error.message);
// } else {
//     console.log('Environment variables loaded successfully!');
// }


// const dotenv = require('dotenv');



// require('dotenv').config({ path: './env' });

// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './.env'
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(` ⚙️  Server is running on port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB Connection failed !!!", err);
    })





















// import express from "express"
// const app = express()


//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.error("ERROR: ", err)
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`Server running on port ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.error("ERROR: ", error)
//             throw err
//         }
//     })()