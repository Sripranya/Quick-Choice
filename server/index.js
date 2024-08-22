const express  =require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const CustomerModel=require('./models/Customers')
 const app=express()
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())

 mongoose.connect('mongodb+srv://21b01a1264:pranya@cluster0.l4sds5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Db connected")
 })
 
 app.post("/",(req,res)=>{ 
   const {u_name,u_pwd} =req.body;
   CustomerModel.findOne({u_name:u_name})
   .then(user=>{
      if(user){
         if(user.u_pwd===u_pwd){
            res.json("Success")
           
         }
         else{
            res.json("the password is incorrect")
          
         }
      }else{
         res.json("No record existed")
       
      }
   })
 })
 app.post('/signup',(req,res)=>{
  CustomerModel.create(req.body)
  .then(SigninDetails=>res.json(SigninDetails))
  .catch(err=>res.json(err))
 })

app.listen(3002,()=>console.log("server running"))