const express=require('express')
const firebaseRouter=require('./routes/firebaseRoutes')
const app=express()

app.use(express.json())

app.use('/api/v1',firebaseRouter)

app.listen(5000,()=>{

    console.log("server is listing on port 5000");
})