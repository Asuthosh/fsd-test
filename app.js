

const express = require('express');
var mongoose = require('./mongoose_db');
//var {MyModel} = require('./usermodel');
var MyModel = require('./usermodel');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());
//app.get('/')
app.post('/api/userentries',(req,res)=>{

    console.log(req.body);
//passing a value to the model    
var model= new MyModel(
    {name:req.body.name,age:req.body.age}
);

model.save().then((data)=>{
    console.log('Succesfully Saved', data)
    },(err)=>{
        console.log('Error',e)
    })
})

app.listen(3000,()=>{
    console.log('started');
})