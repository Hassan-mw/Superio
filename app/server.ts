const express=require('express')
const app=express();







app.get('/api/test',(req,res)=>{
    res.end("Hello")
})




app.listen(8000,()=>{
    console.log("Server si runing on port 5000")
})




