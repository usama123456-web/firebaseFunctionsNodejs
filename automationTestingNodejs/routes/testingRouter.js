const express=require('express')
const testingAutomationController=require('../controllers/testingAutomationController')
const router=express.Router()


router
.route('/testingSelenium')
.get(testingAutomationController.testing)
.get(testingAutomationController.validation)


module.exports=router