import { Container, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const colors = [
    {img : "https://wallpaperaccess.com/full/1489353.jpg", id :1}, 
    {img : "https://cutewallpaper.org/21/to-do-list-wallpaper/6-Steps-to-Finish-Your-To-Do-List-Grant-Cardone-TV.jpg", id : 2}, 
    {img : "https://www.theladders.com/wp-content/uploads/to-do-list-190702.jpg", id : 3},
    ];
    const delay = 2500;
    
    export default function Slideshow() {
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);
    
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
      return (
        <>
            <Container className="slideshow" maxW={{base : '95%', md : '80%', lg : '90%'}}>
            <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                {colors.map((backgroundColor, index) => (
                <div className="slide" key={backgroundColor.id}>
                   <Image shadow='lg' m='auto' src={backgroundColor.img} w={{base : '90%', md :'60%'}}/>
                </div>
                ))}
            </div>
            </Container>
        </>
      );
    }