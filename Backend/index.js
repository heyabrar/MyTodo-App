const express = require("express");
const app = express( );
const cors = require("cors");


const {connection} = require("./config/db");
const {UserRouter} = require("./Routes/User.routes");
const {TodoRouter} = require("./Routes/Todo.routes");
const {Authenticate} = require("./MiddleWares/Authenticate")

app.use(express.json( ));
app.use(cors( ));
app.use("/users", UserRouter)

app.use(Authenticate)
app.use("/todo",TodoRouter);

app.listen(8080, async ( )=>{
    try {
        await connection;
        console.log({"message" : "Connected To MyTodo DB"})
    } catch (error) {
        console.log(error);
        console.log({"message" : "Failed To Connect To MyTodo DB"})
    }
})