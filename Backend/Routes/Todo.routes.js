const {Router} = require("express");
const TodoRouter = Router( );

const {TodoModel} = require("../Models/Todo.model")

TodoRouter.get("/", async (req,res) =>{
    const userID = req.body.userID;
    try {
        const AllTodo = await TodoModel.find({userID});
        res.send(AllTodo)
    } catch (error) {
        console.log(error);
        res.status(400).send({"message" : "Error in getting Todo's"})
    }
});


TodoRouter.post('/create', async (req,res) =>{
    const {task,status,note,userID,date} = req.body;
    try {
        const AddTask = new TodoModel({task,status,note,userID,date})
        await AddTask.save( );
        res.send({"message" : "Todo Added Successfully"})
    } catch (error) {
        res.status(400).send({"message" : "Failed To Add Todo"})
    }
})


TodoRouter.patch("/edit/:id", async (req,res) =>{
    const {id} = req.params;
    const userID = req.body.userID;
    const payload = req.body;
    const Task = await TodoModel.findOne({_id : id});
    if(userID !== Task.userID) res.send({"message" : "You Are Not Authorised, Try Logging In With Your Email"});
    else{
       try {
            await TodoModel.findByIdAndUpdate({_id : id},payload);
            res.send({"message" : "Todo Updated Successfully"})
       } catch (error) {
        res.status(400).send({"message" : "Error in Updating Todo"})
       }
    }
});


TodoRouter.delete("/delete/:id" , async (req,res) =>{
    const {id} = req.params;
    const userID = req.body.userID;
    const Task = await TodoModel.findOne({_id : id});
    if(userID !== Task.userID) res.send({"message" : "You Are Not Authorised, Try Logging In With Your Email"});
    else{
        try {
            await TodoModel.findByIdAndDelete({_id : id});
            res.send({"message"  : "Task Deleted Successfully"});
        } catch (error) {
            res.status(400).send({"message" : "Error in deleting"})
        }
    }
})

module.exports = {
     TodoRouter
}