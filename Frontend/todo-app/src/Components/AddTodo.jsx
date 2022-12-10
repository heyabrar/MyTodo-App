import { useState } from "react"
import {Input, Button, Box, useToast, Text} from "@chakra-ui/react"
import { handleGetTodo, PostTodoFailure, PostTodoRequest, PostTodoSuccess } from "../Redux/Action";
import { PostTodoData } from "../Fetch/Fetch";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"

var date=new Date();
var datearray=date.toLocaleString().split("/");
var sqldate= datearray[2].slice(0,4)+"-"+(datearray[0]<=9?"0"+datearray[0]:datearray[0])+"-"+(datearray[1]<=9?"0"+datearray[1]:datearray[1]);

export default function AddTodo ( ) {
    const DisPatch = useDispatch( );
    const [title,setTitle] = useState('');
    const [note,setNote] = useState('');
    const toast = useToast( );

    const handlePostTodo = (title,note) =>{
        const payload = {
            task : title,
            status : false,
            note : note,
            date : sqldate
        }
        setNote("");
        setTitle("");
        DisPatch(PostTodoRequest( ));
        return PostTodoData(payload).then((res)=>{
            DisPatch(PostTodoSuccess(res.data))
            toast({
                title: 'New Task.',
                description: 'Task Added',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position : "top",
              })
        })
        .then(( ) => DisPatch(handleGetTodo))
        .catch((err) => DisPatch(PostTodoFailure(err)))
    }
    return (
        <>
        <Box width={{base : '95%', md : '60%',  lg :'40%'}} m='auto' padding='50px' mt='2%' shadow='lg'>
            <Text>Add Title</Text>
            <Input type='text' placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
            <br /><br />
            <Text>Add A Note</Text>
            <Input type='text' placeholder="Note" value={note} onChange={(e)=> setNote(e.target.value)}/>
            <br /><br />
            <Button onClick={( ) => handlePostTodo(title,note)} colorScheme='#4299E1' bg='#4299E1' size={{base :'sm', md : 'md'}}>Add</Button>
        </Box>

        <Text color='#4299E1' textAlign='center' textDecoration='underline' fontSize={{base :'18px', md :'20px'}} mt='30px'><Link to='/todo'>Your Task's</Link></Text>
    
        </>
    )
}