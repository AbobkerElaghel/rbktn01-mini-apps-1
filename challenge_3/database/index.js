const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


  var dbName = "users"
  mongoose.connect(`mongodb://localhost/${dbName}`,{useMongoClient: true  } ,(err,db)=>{
      if(err) throw err;
      console.log(`database ${dbName} was created`);
  });


  mongoose.connection.once("open",()=>{
  console.log("the connection was made")
}).on("error",(error)=>{
  console.log("faild to connect to database")
})




let userSchema = mongoose.Schema({
  userName:String,
  userPassword:String,
  userEmail:String,
  addressLine1:String,
  addressLine2:String,
  city:String,
  state:String,
  zip:Number,
  cardNumber:Number,
  ccv:Number,
  expiryDate:Date,
  billingAdress:String,
});

let User = mongoose.model('User', userSchema);

  
let save = (user) => {
  return new Promise((resolve,reject)=>{
    var data = new User(user)
    data.save((err,res)=>{
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    });
  })
 
}

module.exports.save = save;
