const twilio = require('twilio')
require('dotenv').config();
const ACCOUNTSID = 'AC5aba7e11c99e3f17a319b21e008c1f2d';
const AUTHTOKEN = '5308470d875e7e1d088cf678d0fb020c';

const sendMessage=function (mobile,res,next){
    let randomOTP = Math.floor(Math.random() * 9000)+1000;
        twilio(ACCOUNTSID, AUTHTOKEN).messages.create({
            body: 'Hello myre your otp is '+randomOTP ,
            from: "Gamers Bootcamp", // Replace with your Twilio phone number
            to: mobile // Replace with the recipient's phone number
})
.then(message => console.log(message.sid))
.catch(error => console.log(error));
   return randomOTP;
}
//not included
module.exports={
    sendMessage,
}