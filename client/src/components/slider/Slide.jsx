import { useContext } from "react";
import { SlideContext } from "../../context/SlideContext";

const imagesArray = {
    1: 'xs:bg-mobile-1 md:bg-desktop-1',
    2: 'xs:bg-mobile-2 md:bg-desktop-2',
    3: 'xs:bg-mobile-3 md:bg-desktop-3'
}

const Slide = ({ slide }) => {

    const { current } = useContext(SlideContext)
    const isActive = current === slide

    return ( 
        <div className={`h-full w-full absolute top-0 left-0 bg-cover bg-center bg-img easy-transition ${isActive ? imagesArray[slide] : 'opacity-0'}`} ></div>
     );
}
 
export default Slide;