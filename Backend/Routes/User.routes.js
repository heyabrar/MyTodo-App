const {Router} = require("express");
const UserRouter = Router ( );
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config( );

const {UserModel} = require("../Models/User.model")

UserRouter.post("/signup", async (req,res) =>{
    const {email,password} = req.body
    const User_Already_Exist = await UserModel.findOne({email});
    if(User_Already_Exist?.email)  res.send({"message" : "User with Email Already Exist, Try Different Email"});
    else
    {
        try {
            bcrypt.hash(password,4, async function(err,hash){
                const SignUpData = new UserModel({email,password:hash});
                await SignUpData.save( );
                res.send({"message" : "SignUp Successful, Please Log In"})
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({"message" : "Failed To SignUp, Something Went Wrong"})
        }
    }
})


UserRouter.post("/login", async (req,res) =>{
    const {email,password} = req.body;
    const UserData = await UserModel.find({email})
    try {
        if(UserData.length > 0)
        {
            const hashedPassword = UserData[0].password;
            bcrypt.compare(password, hashedPassword, function (err,result){
                if(result)
                {
                    const token = JWT.sign({"userID" : UserData[0]._id},process.env.JWT_KEY);
                    res.send({"message" : "Login Successfull", "token" : token})
                }
                else{
                    res.status(400).send({"message" : "User Not Found"})    
                }
            })
        }
        else{
            res.status(400).send({"message" : "User Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"message" : "Ooops!! Something Went Wrong, Try Again Later"})
    } 
})



module.exports = {
    UserRouter
}