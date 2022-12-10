import axios from "axios"

export const GetTodoData = ( ) =>{
    return axios.get(`https://colorful-gold-puffer.cyclic.app/todo`, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}


export const PostTodoData = (payload) =>{
    return axios.post(`https://colorful-gold-puffer.cyclic.app/todo/create`, payload, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const ToggleTodoData = (payload,id) =>{
    return axios.patch(`https://colorful-gold-puffer.cyclic.app/todo/edit/${id}`, payload, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const DeleteTodoData = (id) =>{
    return axios.delete(`https://colorful-gold-puffer.cyclic.app/todo/delete/${id}`, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const GetTodoCompletedData = ( ) =>{
    return axios.get(`http://localhost:8080/todo?status=true`)
}

export const SignUpData = (payload) =>{
    return axios.post(`https://colorful-gold-puffer.cyclic.app/users/signup`, payload)
}

export const LoginData = (payload) =>{
    return axios.post(`https://colorful-gold-puffer.cyclic.app/users/login`, payload)
}