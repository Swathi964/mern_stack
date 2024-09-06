//1.importing express
const express = require('express')
require("./connection")
var empmodel =require("./model/employee")
 //import cors
 const cors=require('cors')

//2.Initialize
const app = new express()

//mid
app.use(express.json())
app.use(cors())

//3.Api creation
app.get('/',(req,res)=>{
    res.send("message from the server")
})


app.get('/trial',(req,res)=>{
    res.send("trial  server")
})

//add api
app.post('/add',async(req,res)=>{
    try {
        await empmodel(req.body).save();
        res.send({message:"data added!!"})        


    } catch (error) {
        console.log(error)
        
        
    }
})
app.get('/view',async(req,res)=>{
    try {
       var show = await empmodel.find();
        res.send(show);        


    } catch (error) {
        console.log(error);
        
    }    

});
//to delete
app.delete("/remove/:id",async(req,res)=>{
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({message:"data Deleted !!"})
    } catch (error) {
        console.log(error);
        
    }
});
//to update
app.put("/update/:id",async(req,res)=>{
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Updata updates!!"})
    } catch (error) {
        console.log(error);
        
    }
})

//4.port
app.listen(3004,()=>{
    console.log("port is running");
})