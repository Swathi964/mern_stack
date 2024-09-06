
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://swathikris456:swathikrishna@cluster0.vasxh.mongodb.net/ccsit?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("db connected")

  })
  .catch((err)=>{
    console.log(err)
  })