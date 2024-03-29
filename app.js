const express =require("express");
const nocache=require("nocache");
const adminRoute=require('./routes/adminRoute');
const userRoute=require('./routes/userRoute');
const userForgetPass=require('./routes/forgotPassword');
const mongo=require('./config/config');
const mongoSanitize = require('express-mongo-sanitize')
const app=express();
const PORT=5000;
//export mongoose it as function
app.set(mongo.mongooseUp())

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(mongoSanitize());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(nocache());

app.use("/",userRoute);

app.use("/admin",adminRoute);

app.use("/forgot",userForgetPass);


app.all('*', (req, res) => {
  res.render('error');
});


app.listen( PORT , ()=>{
    console.log("server is running at "+PORT);
});