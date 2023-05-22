
const mongooseUp=()=>{
    const mongoose=require('mongoose');
    mongoose.set('strictQuery',false);
    require('dotenv').config();
    mongoose.connect(process.env.DATABASE);
    mongoose.connection.once('open',()=>{
    console.log('connection is successfully established');
});
}

module.exports={
    mongooseUp
}