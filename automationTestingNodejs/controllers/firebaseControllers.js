
// import functions from 'firebase-functions';
// import  admin from 'firebase-admin';
// import  express from 'express';
// import  bodyParser from "body-parser";

const db =require('../config')

exports.createData=(async (req,res,next)=>{

     try {
        let data={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        const newDoc = await db.collection(req.body.collectionName).add(data);
        res.status(200).json({
            status:"200",
            message:"user created",
            user:newDoc
        })
     }catch(err){
         console.log(err,"error");
        res.status(200).json({
            status:"200",
            error:err
        })
     }
})


exports.readAllData=(async (req,res,next)=>{
    console.log("listing request from the postman");
    let result=[];
    db
    .collection("user")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot,"querySnapshot==>");
      
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      })

      res.status(200).json({
        status:"200",
        data:result
    })
    })
    .catch(err=>{
        res.status(200).json({
            status:"200",
            error:err
        })
    })
})

exports.updateData=((req,res,next)=>{
    db
    .collection(req.collectionName)
    .doc(req.params.id)
    .update(req.data)
    .then((querySnapshot) => {
        res.status(200).json({
            status:"200",
            message:""
        })
    })
    .catch((err) => {
        res.status(200).json({
            status:"200",
            error:err
        })
    });


})

exports.deleteData=((req,res,next)=>{
    db
    .collection("user")
    .doc(req.params.id)
    .delete()
    .then((querySnapshot) => {
        res.status(200).json({
            status:"200",
            message:"data deleted "
        })
    })
    .catch((err) => {
        res.status(200).json({
            status:"200",
            error:err
        })
    });

})