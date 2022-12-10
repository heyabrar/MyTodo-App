import { Route, Routes } from "react-router-dom";
import AddTodo from "../Components/AddTodo";
import HomePage from "../Components/Home";
import Login from "../Components/Login";
import PrivateRoutes from "../Components/PrivateRoutes";
import SignUp from "../Components/SingUp";
import Todo from "../Components/Todo";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/todo" element={<PrivateRoutes><Todo/></PrivateRoutes>}/>
            <Route path="/create" element={<PrivateRoutes><AddTodo/></PrivateRoutes>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </>
    )
}