const express=require("express");


const app=express();

const notes=[];
//jab bhi iss route ya API pe hmaari request aayegi toh req.body k andar jo bhi data hoga vpo sonsole ho jayega 
app.post("/notes",(res,req)=>{
    console.log(req.body)
})


module.exports = app;