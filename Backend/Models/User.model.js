const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email : String,
    password : String
})

const UserModel = mongoose.model("User",UserSchema);

module.exports = {
    UserModel
}