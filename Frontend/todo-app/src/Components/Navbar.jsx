import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import {FcTodoList} from "react-icons/fc"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
export default function Navbar( ) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={4}  className='ChackraNavBar' shadow='lg'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton 
          color={'#4299E1'}
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} color='#4299E1'>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '65%', lg : '40%'}} justifyContent='space-between' alignItems='center' color='#4299E1' fontWeight='650'>
                <Link to='/'><Text>HOME</Text></Link>
                <Link to='/todo'><Text>YOUR TASK</Text></Link>
                <Link to='/create'><Text>CREATE</Text></Link>
                <Link to='/login'><Text>LOGIN</Text></Link>
                <Link to='/signup'><Text>SIGN UP</Text></Link>
            </Flex>
          </Flex>
            <Box width='5%' justifyContent={'center'} display='flex'>
           <Link to='/'><Text cursor='pointer' fontSize='30px' fontWeight={600}>{<FcTodoList/>}</Text></Link>
            </Box>
        </Flex> 
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} color='#4299E1' fontWeight='600'>
                <Link to='/'><Text>HOME</Text></Link>
                <Link to='/todo'><Text>YOUR TASK</Text></Link>
                <Link to='/create'><Text>CREATE</Text></Link>
                <Link to='/login'><Text>LOGIN</Text></Link>
                <Link to='/signup'><Text>SIGN UP</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}