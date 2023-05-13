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
        <section className="section-container bg-white">
            <SlideHolder >
                <Slide slide={1}/>
                <Slide slide={2}/>
                <Slide slide={3}/>
                <button className="absolute right-12 bottom-0 bg-black w-12 h-12 z-10 centered disabled:cursor-not-allowed" onClick={decrease} disabled={isZero}>
                    <Prev />
                </button><button className="absolute right-0 bottom-0 bg-black w-12 h-12 z-10 centered disabled:cursor-not-allowed" onClick={increase} disabled={isMax} >
                    <Next />
                </button>
            </SlideHolder>
        </section>
     );
}
 
export default Slider;