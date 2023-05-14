import { SlideContext } from "../../context/SlideContext";
import { SlideHolder, Slide } from "./"
import { ReactComponent as Prev } from "../../assets/icons/icon-angle-left.svg"
import { ReactComponent as Next } from "../../assets/icons/icon-angle-right.svg"
import { useContext } from "react";

const Slider = () => {
    const { current, increase, decrease } = useContext(SlideContext)
    const isZero = current === 1
    const isMax = current === 3

    return ( 
        <section className="bg-white section-container md:col-span-3">
            <SlideHolder >
                <Slide slide={1}/>
                <Slide slide={2}/>
                <Slide slide={3}/>
                <button className="absolute bottom-0 z-10 w-20 h-16 bg-black right-20 centered disabled:cursor-not-allowed" onClick={decrease} disabled={isZero}>
                    <Prev />
                </button><button className="absolute bottom-0 right-0 z-10 w-20 h-16 bg-black centered disabled:cursor-not-allowed" onClick={increase} disabled={isMax} >
                    <Next />
                </button>
            </SlideHolder>
        </section>
     );
}
 
export default Slider;