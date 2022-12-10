import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpData } from "../Fetch/Fetch";

export default function SignUp ( ) {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const toast = useToast( );
    const Nav = useNavigate( );

    const handleSubmit = (email,password) =>{
       if(!email || !password){
        toast({
            title: 'error',
            description: "Something Went Wrong",
            status: 'error',
            duration: 4000,
            isClosable: true,
            position : "top"
          })
       }
       else{
        const payload = {
            email,
            password
        }
        return SignUpData(payload).then((res)=>{
            const Message = res.data;
            toast({
                title: 'Account created.',
                description: Message.message,
                status: 'success',
                duration: 4000,
                isClosable: true,
                position : "top"
              })
              setEmail("");
              setPassword("");
        })
        .catch((err) => toast({
            title: 'error.',
            description: 'Something Went Wrong',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position : "top",
        }))

       }
    }
    return (
        <>
        <Box  width={{base : '90%', md : '40%', lg :'30%'}} m='auto' padding={{base : '40px', lg :'80px'}} mt={{base : '30px'}} shadow='lg'>
                <Text textAlign='center'>Sign Up</Text>
                <br />
                <Box>
                    <Text>User Email</Text>
                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br /><br />
                    <Text>User Password</Text>
                    <Input placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Link to='/login'><Text textAlign='center' fontSize='12px' mt='10px' textDecoration='underline'>Already have an account?</Text></Link>
                    <br /><br />
                <Button onClick={( ) => handleSubmit(email,password)} colorScheme='#4299E1' bg='#4299E1' size={{base : 'sm', md : 'md'}}>Sign Up</Button>
                </Box>
            </Box>
        </>
    )
}