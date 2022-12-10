import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slideshow from "./SlideShow";

export default function HomePage ( ) {
    return(
        <>
        <Slideshow/>
        <Box width={{base :'85%', md : '60%'}} m='auto' fontSize={{base :'14px', md : '15px'}} mt={{base :'20px'}}>
            <Text textAlign={'justify'}>As its name implies, the To-do list on an article's talk page shows the list of improvements suggested for the article. 
                It is created and formatted using the To do template. The list is maintained by editors, writers, reviewers or readers like 
                you as a way to focus your collaborative efforts. As such, they represent a tentative consensus that helps improve the efficiency of the 
                editing process. A To-do list for this page may look like this:</Text>
        </Box>

       <Box width={{base :'80%', md : '60%'}} m='auto' mt={{base : '20px'}} marginBottom='30px' shadow='lg'> 
            <Image src="https://user-images.githubusercontent.com/103938174/206863852-b011395b-66b6-4cec-91f1-092074eb10ac.png"/>
       </Box>
       <Link to='/create'><Text textAlign='center' fontSize={{base : '12px', lg : '17px'}} letterSpacing='2px' mt={{base : '10px'}} textDecoration='underline'>CREATE YOUR TODO NOW</Text></Link>
        </>
    )
}