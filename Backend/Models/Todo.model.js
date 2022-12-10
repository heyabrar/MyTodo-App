const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    task : String,
    status : Boolean,
    note : String,
    userID : String,
    date : String
})

const TodoModel = mongoose.model("Todo",TodoSchema);

module.exports = {
    TodoModel
}