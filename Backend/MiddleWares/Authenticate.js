const JWT = require("jsonwebtoken");
require("dotenv").config( );

const Authenticate = (req,res,next) =>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded = JWT.verify(token,process.env.JWT_KEY);
        if(decoded){
            const userID = decoded.userID;
            req.body.userID = userID;
            next ( );
        }

        else{
            res.status(400).send({"message" : "User Not Found, Try Logging In"})
        }
    }
    else{
        res.status(400).send({"message" : "User Not Found, Try Logging In"})
    }
}

module.exports = {
    Authenticate
}