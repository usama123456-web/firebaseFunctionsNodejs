const express=require('express')
const firebaseController=require('../controllers/firebaseControllers')
const router=express.Router()

router
.route('/firebase')
.get(firebaseController.readAllData)
.post(firebaseController.createData)



router
.route('/:id')
.delete(firebaseController.deleteData)
.patch(firebaseController.updateData)


module.exports=router