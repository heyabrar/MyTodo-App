import { useEffect } from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { DeleteTodoData , ToggleTodoData } from "../Fetch/Fetch"
import { DeleteTodoFailure, DeleteTodoSuccess, handleGetTodo, ToggleTodoFailure, ToggleTodoRequest, ToggleTodoSuccess } from "../Redux/Action";
import {Box,Text,Flex, SimpleGrid} from "@chakra-ui/react"
import {BsToggleOff,BsToggleOn} from "react-icons/bs"
import {MdDelete} from "react-icons/md"

export default function Todo ( ){
    const DisPatch = useDispatch( );
    const {task,isLoading,isError} = useSelector((store) =>{
        return {
            task : store.task,
            isLoading : store.isLoading,
            isError : store.isError,
        }
    },shallowEqual);

    const handleToggleTodo = (newStatus,id) =>{
        const payload = {
            status : newStatus,
        }
        DisPatch(ToggleTodoRequest( ));
        return ToggleTodoData(payload,id).then((res)=>{
            DisPatch(ToggleTodoSuccess(res.data))
        })
        .then(( ) => DisPatch(handleGetTodo))
        .catch((err) => DisPatch(ToggleTodoFailure(err)))
    }


    const handleDeleteTodo = (id) =>{
        return DeleteTodoData(id).then((res)=>{
            DisPatch(DeleteTodoSuccess(res.data))
        })
        .then(( ) => DisPatch(handleGetTodo))
        .catch((err) => DisPatch(DeleteTodoFailure(err)))
    }

    useEffect(( ) =>{
        handleGetTodo(DisPatch);
    }, [ ])
    
    return (
        <>
        <Text textAlign='center'  mt='60px'>{task.length === 0 && "You Have Not Created Any Todo "}</Text>
        <SimpleGrid columns={[1,1,1,1]} w={{base : '95%', md :'75%', lg :'60%'}} m='auto' rowGap='20px' marginBottom='20px' mt='2%'>
            {task.length > 0 && task.map((elem)=>{
                return <Box key={elem._id} border={elem.status ? '2px solid green' : '2px solid red'} width={{base :'95%'}} m='auto' padding={{base :'20px'}} lineHeight={{base :'30px'}} mt={{base : '10px'}} borderRadius='10px'>
                   <Flex justifyContent={'space-between'}>
                    <Text fontWeight='600' fontSize={{base : '18px', md : '19px', lg : '20px'}}>{elem.task}</Text>
                    <Text fontWeight='500' fontSize={{base : '10px', md : '10px', lg : '12px'}} color='gray'>{"Created On : "+ elem.date}</Text>
                   </Flex>
                    <Text fontSize={{base : '16px', md : '17px'}}>{elem.note}</Text>
                    <Flex alignItems='center' gap={'40px'}>
                         <Text color ={elem.status ? 'green' : 'red'}>{elem.status ? "Completed" : "InComplete"}</Text>
                         <Text onClick={( ) => handleToggleTodo(!elem.status,elem._id)} cursor='pointer' fontSize={{base:'18px'}}
                         color ={elem.status ? 'green' : 'red'}
                         >{elem.status ? <BsToggleOff/> : <BsToggleOn/>}</Text>
                    </Flex>
                    <Text  onClick={( ) => handleDeleteTodo(elem._id)} cursor='pointer' fontSize={{base:'18px'}}>{<MdDelete/>}</Text>
                </Box>
            })}
        </SimpleGrid>
        <Text textAlign='center'>{isError && 'Oops!! Something Went Wrong!!!'}</Text>
        </>
    )
}