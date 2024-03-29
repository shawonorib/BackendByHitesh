//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/* 
import dotenv from "dotenv";
import connectDB from "./db/index.js";

//I am wrong here। Importing this way will not work here. Must be imported from app.js.

import express from "express"
const app = express();

dotenv.config({
    path: './env'
})

*/

/* 
//2nd approach to connect DB
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed!!!", err);
})
 */

/* 
//1ST APPROACH TO CONNECT DB
import express from "express"
const app = express();

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/
