const express=require('express')
const firebaseController=require('../controllers/firebaseControllers')
const router=express.Router()

router
.route('/firebase')
.get(firebaseController.readData)
.post(firebaseController.createData)
.patch(firebaseController.updateData)
.delete(firebaseController.deleteData)


module.exports=router