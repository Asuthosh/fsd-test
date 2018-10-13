
var mongoose=require('mongoose');

//Model Creation

var MyModel = mongoose.model('UserModel',{
    name:{type:String,
    required:true,
    minlength:2,
    trim: true
    },
    age:{type:Number}
    
    })

    module.exports={ 
        MyModel:MyModel
    }
    
    //module.exports={ MyModel}
    
    