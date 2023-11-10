const express = require("express");
const user_route = express();
const session = require("express-session");
const config = require("../config/config");
const cartController=require("../controllers/cartController");
const userControllers = require("../controllers/userController");
const wishlistController = require("../controllers/wishlistController");
const auth = require("../middleware/auth");
const errorHandler = require('../middleware/errorHandler');

require('dotenv').config();

user_route.use(
  session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: true,
  })
);

user_route.set("views", "./views/users");

user_route.get("/",userControllers.loadHome);

user_route.get("/login",auth.isLogout,userControllers.loginLoad);

user_route.get("/register",userControllers.loadRegister);

user_route.get("/login", auth.isLogout, userControllers.loginLoad);

user_route.post("/login", userControllers.verifyLogin);

user_route.get("/register", auth.isLogout, userControllers.loadRegister);

user_route.post("/register", userControllers.loadOtp);

user_route.post("/otpPage",userControllers.verifyOtp)

user_route.get("/shop",userControllers.loadShop);

user_route.use(auth.isLogin);

user_route.get("/home", userControllers.loadHome);

user_route.get("/login",auth.isLogin,userControllers.loadHome);

user_route.get("/logout",userControllers.userLogout);

user_route.get("/profile",userControllers.loadUserProfile);

user_route.get("/editUser",userControllers.editUser);

user_route.post("/editUser",userControllers.editUserUpdate);

user_route.get("/viewDetails",userControllers.loadDetails);

user_route.get("/cart",cartController.loadCart);

user_route.get("/addToCart",cartController.addToCart);

user_route.post("/updateCart",cartController.updateCart);

user_route.get('/deleteCart',cartController.deleteCart);

user_route.get("/loadCheckout",userControllers.loadCheckout);

user_route.post("/addAddress",userControllers.addNewAddress);

user_route.get("/deleteAddress",userControllers.deleteAddress);

user_route.get("/deleteAddressCart",userControllers.deleteAddressCart);

user_route.get("/editAddress",userControllers.editAddress);

user_route.post("/editAddress",userControllers.editUpdateAddress);

user_route.get("/editcheckoutAddress",userControllers.editCheckoutAddress);

user_route.post("/editcheckoutAddress",userControllers.editUpdateCheckoutAddress);

user_route.post("/orderSuccess",userControllers.placeOrder);

user_route.get("/cancelOrder",userControllers.cancelOrder);

user_route.get("/vieworder",userControllers.viewOrderDetails);

user_route.get("/onlinePayment",userControllers.loadOrderSuccess);

user_route.get("/wishlist",wishlistController.loadWishlist);

user_route.get("/addWishlist",wishlistController.addWishlist);

user_route.get("/addCartremoveWishlist",wishlistController.addToCartremovefromwishlist);

user_route.get("/deleteWishlist",wishlistController.deleteWishlist);

user_route.post("/applyCoupon",userControllers.applyCoupon);

user_route.get("/returnOrder",userControllers.retunOrder);

user_route.get("/cancelReturnorder",userControllers.cancelReturnOrder);

user_route.use(errorHandler);

module.exports = user_route;