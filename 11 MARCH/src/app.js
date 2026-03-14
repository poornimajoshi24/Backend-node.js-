// ye server create aur configure karta hai 

const express=require('express');
const app=express()
app.use(express.json())
app.post("/notes",(req,res)=>{
    const {title,description}=req.body
})
module.exports=app;