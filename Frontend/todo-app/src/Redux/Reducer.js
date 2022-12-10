import * as types from "./ActionTypes"

const InitialData = {
    task : [ ],
    isLoading : false,
    isError : false,
    SingleTodo : { }
}


export default function TodoReducer (state=InitialData, action) {
    const {payload,type} = action;

    switch(type) {
        case types.GET_TODO_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_TODO_SUCCESS : {
            return {
                ...state,
                task : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_TODO_FAILURE : {
            return {
                ...state,
                task : [ ],
                isLoading : false,
                isError : true
            }
        }
        default :
         return state
    }
}