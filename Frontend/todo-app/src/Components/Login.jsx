import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginData } from "../Fetch/Fetch";

export default function LogIn ( ) {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const toast = useToast( );
    const Nav = useNavigate( );

    const handleSubmit = (email,password) =>{
        const payload = {
            email,
            password
        }
        return LoginData(payload).then((res)=>{
            localStorage.setItem("UserToken",res.data.token)
            const Message = res.data;
            setEmail("");
            setPassword("")
            toast({
                title: 'Account created.',
                description: Message.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position : "top",
              })
              Nav("/todo")
        })
        .catch((err) => toast({ title: 'Something Went Really Wrong, Try Singing Up',
        description: 'Incorrect Password or Email',
        status: 'error',
        duration: 5000,
        isClosable: true,
        colorScheme : "red",
        position : "top"},
        setEmail(""),
        setPassword(""),
        )) 
    }
    return (
        <>
            <Box  width={{base : '90%', md : '40%', lg :'30%'}} m='auto' padding={{base : '40px', lg :'80px'}} mt={{base : '30px'}} shadow='lg'>
                <Text textAlign='center'>Log In</Text>
                <br />
                <Box>
                    <Text>User Email</Text>
                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br /><br />
                    <Text>User Password</Text>
                    <Input placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Link to='/signup'><Text textAlign='center' fontSize='12px' mt='10px' textDecoration='underline'>Don't have an account?</Text></Link>
                    <br /><br />
                <Button onClick={( ) => handleSubmit(email,password)} colorScheme='#4299E1' bg='#4299E1' size={{base : 'sm', md : 'md'}}>LOGIN</Button>
                </Box>
            </Box>
        </>
    )
}