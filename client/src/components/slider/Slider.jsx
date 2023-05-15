import { SlideContext } from "../../context/SlideContext";
import { SlideHolder, Slide, Navbar } from "./"
import { ReactComponent as Prev } from "../../assets/icons/icon-angle-left.svg"
import { ReactComponent as Next } from "../../assets/icons/icon-angle-right.svg"
import { useContext } from "react";

const Slider = () => {
    const { current, increase, decrease } = useContext(SlideContext)
    const isZero = current === 1
    const isMax = current === 3

    return ( 
        <section className="relative bg-white xs:section-container row-start-1 col-start-1  md:w-full h-full">
            <SlideHolder >
                <Navbar />
                <Slide slide={1}/>
                <Slide slide={2}/>
                <Slide slide={3}/>
                <div className="flex absolute bottom-0 xs:right-0 md:-right-40">
                    <button className="z-10 w-20 h-16 bg-black centered disabled:cursor-not-allowed" onClick={decrease} disabled={isZero}>
                        <Prev />
                    </button><button className=" z-10 w-20 h-16 bg-black centered disabled:cursor-not-allowed" onClick={increase} disabled={isMax} >
                        <Next />
                    </button>
                </div>
            </SlideHolder>
        </section>
     );
}
 
export default Slider;