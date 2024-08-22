const mongoose=require('mongoose')

const CustomersSchma =new mongoose.Schema({
    u_name:String,
    u_email:String,
    phone:Number,
    u_pwd:String
    

})
const CustomerModel=mongoose.model("SigninDetails",CustomersSchma) 
module.exports=CustomerModel