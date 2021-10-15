// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express=require('express')
const firebaseRouter=require('./routes/firebaseRoutes')
const testingRouter=require('./routes/testingRouter')
const app=express()


app.use(express.json())

app.use('/api/v1',firebaseRouter)
app.use('/api/v1/',testingRouter)


app.listen(5000,()=>{
    
    console.log("server is listing on port 5000");
 
})