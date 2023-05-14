import { useContext } from "react";
import { SlideContext } from "../../context/SlideContext";
import one from "../../assets/mobile/mobile-image-hero-1.jpg"
import two from "../../assets/mobile/mobile-image-hero-2.jpg"
import three from "../../assets/mobile/mobile-image-hero-3.jpg"

const images = {
    1: one,
    2: two,
    3: three
}

const imagesArray = {
    1: 'bg-mobile-1',
    2: 'bg-mobile-2',
    3: 'bg-mobile-3'
}

const Slide = ({ slide }) => {

    const { current } = useContext(SlideContext)
    const isActive = current === slide

    return ( 
        <div className={`h-full w-full absolute top-0 left-0 bg-cover bg-center bg-img ${isActive ? imagesArray[slide] : 'opacity-0'}`} ></div>
     );
}
 
export default Slide;