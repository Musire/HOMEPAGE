import { HeroSection as Text } from "../../constants/Text";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg"

const Hero = () => {
    return ( 
        <section className="font-normal bg-white row-start-1 col-start-2 md:w-full centered xs:p-4 xs:py-10 md:px-8 ">
            <div className="flex-col xs:space-y-8 md:space-y-3 no-underline block-container xs:w-11/12 xs:py-10 md:py-0">
                <h1 className="text-5xl md:text-4xl font-bold text-superGray">{Text.title}</h1>
                <p className="xs:text-xl md:text-sm text-mid/80">{Text.content}</p>
                <button className="font-bold xs:w-3/5 md:w-1/2 xs:text-xl md:text-base text-left uppercase text-superGray tracking-superwide spaced">
                    {Text.CTA}
                    <Arrow />
                </button>
            </div>
        </section>
     );
}
 
export default Hero;