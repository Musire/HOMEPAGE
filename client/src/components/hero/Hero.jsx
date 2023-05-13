import { HeroSection as Text } from "../../constants/Text";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg"

const Hero = () => {
    return ( 
        <section className="section-container bg-white pt-28 pb-10 font-normal">
            <div className="block-container flex-col space-y-8 no-underline">
                <h1 className="text-5xl text-superGray">{Text.title}</h1>
                <p className="text-lg text-mid/80">{Text.content}</p>
                <button className="text-superGray text-left uppercase tracking-superwide text-2xl spaced w-3/5">
                    {Text.CTA}
                    <Arrow />
                </button>
            </div>
        </section>
     );
}
 
export default Hero;