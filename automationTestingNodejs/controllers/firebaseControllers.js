

exports.createData=((req,res,next)=>{

     try {
        res.status(200).json({
            status:"200",
            message:""
        })
     }catch(err){
        res.status(200).json({
            status:"200",
            error:err
        })
     }
})


exports.readData=((req,res,next)=>{
    console.log("listing request from the postman");
    try {
        res.status(200).json({
            status:"200",
            message:""
        })
     }catch(err){
        res.status(200).json({
            status:"200",
            error:err
        })
     }
})

exports.updateData=((req,res,next)=>{

    try {
        res.status(200).json({
            status:"200",
            message:""
        })
     }catch(err){
        res.status(200).json({
            status:"200",
            error:err
        })
     }
})

exports.deleteData=((req,res,next)=>{

    try {
        res.status(200).json({
            status:"200",
            message:""
        })
     }catch(err){
        res.status(200).json({
            status:"200",
            error:err
        })
     }
})