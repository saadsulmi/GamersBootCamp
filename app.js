const express =require("express");
const nocache=require("nocache");
const adminRoute=require('./routes/adminRoute');
const userRoute=require('./routes/userRoute');
const userForgetPass=require('./routes/forgotPassword');
const mongo = require('./config/config');

const app=express();

//export mongoose it as function
app.set(mongo.mongooseUp())

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

app.listen(5000, ()=>{
    console.log("server is running at 5000");
});