var mongoose =require('mongoose')

var schema =mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Sal:Number

})
var EmployeeMode1 =mongoose.model("employee",schema);
module.exports=EmployeeMode1;