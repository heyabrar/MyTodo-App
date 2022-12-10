import { GetTodoData } from "../Fetch/Fetch"
import * as types from "./ActionTypes"


export const GetTodoRequest = ( ) =>{
    return {
        type : types.GET_TODO_REQUEST
    }
}


export const GetTodoSuccess = (payload) =>{
    return {
        type : types.GET_TODO_SUCCESS,
        payload,
    }
}


export const GetTodoFailure = ( ) =>{
    return {
        type : types.GET_TODO_FAILURE
    }
}

export const PostTodoRequest = ( ) =>{
    return {
        type : types.POST_TODO_REQUEST
    }
}


export const PostTodoSuccess = (payload) =>{
    return {
        type : types.POST_TODO_SUCCESS,
        payload,
    }
}


export const PostTodoFailure = ( ) =>{
    return {
        type : types.POST_TODO_FAILURE
    }
}


export const ToggleTodoRequest = ( ) =>{
    return {
        type : types.TOGGLE_TODO_REQUEST
    }
}


export const ToggleTodoSuccess = (payload) =>{
    return {
        type : types.TOGGLE_TODO_SUCCESS,
        payload,
    }
}


export const ToggleTodoFailure = ( ) =>{
    return {
        type : types.TOGGLE_TODO_FAILURE
    }
}


export const DeleteTodoRequest = ( ) =>{
    return {
        type : types.DELETE_TODO_REQUEST
    }
}


export const  DeleteTodoSuccess = (payload) =>{
    return {
        type : types.DELETE_TODO_SUCCESS,
        payload,
    }
}


export const  DeleteTodoFailure = ( ) =>{
    return {
        type : types.DELETE_TODO_FAILURE
    }
}



export const handleGetTodo = (DisPatch) =>{
    DisPatch(GetTodoRequest( ));
    return GetTodoData( ).then((res)=>{
        DisPatch(GetTodoSuccess(res.data))
    })
    .catch((err) => DisPatch(GetTodoFailure(err)))
}
