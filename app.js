const express =require("express");
const nocache=require("nocache");
const adminRoute=require('./routes/adminRoute');
const userRoute=require('./routes/userRoute');
const userForgetPass=require('./routes/forgotPassword');
const app=express();
const PORT=5000;
//export mongoose it as function
const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
require('dotenv').config();
mongoose.connect(process.env.DATABASE);
mongoose.connection.once('open',()=>{
console.log('connection is successfully established');
});

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(nocache());


app.use("/",userRoute);

app.use("/forgot",userForgetPass);

app.use("/admin",adminRoute);

app.all('*', (req, res) => {
  res.render('error');
});


app.listen( PORT , ()=>{
    console.log("server is running at "+PORT);
});