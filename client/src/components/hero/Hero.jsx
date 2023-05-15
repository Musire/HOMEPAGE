import { HeroSection as Text } from "../../constants/Text";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg"

const Hero = () => {
    return ( 
        <section className="font-normal bg-white xs:section-container md:block-container md:col-start-4 md:col-span-2">
            <div className="flex-col space-y-8 no-underline block-container xs:w-full xs:p-10">
                <h1 className="text-5xl text-superGray">{Text.title}</h1>
                <p className="text-lg text-mid/80">{Text.content}</p>
                <button className="w-4/5 text-2xl text-left uppercase text-superGray tracking-superwide spaced">
                    {Text.CTA}
                    <Arrow />
                </button>
            </div>
        </section>
     );
}
 
export default Hero;