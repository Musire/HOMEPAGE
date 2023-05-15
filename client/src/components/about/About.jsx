import Dark from "../../assets/image-about-dark.jpg"
import Light from "../../assets/image-about-light.jpg"
import { AboutSection as Text } from "../../constants/Text"

const About = () => {
    return ( 
        <section className="font-normal bg-white section-container row-start-2 col-span-2 md:h-[80%]">
            <div className="xs:flex-col md:flex md:flex-row xs:w-full md:h-full ">
                <img src={Dark} alt="dark-about" className="h-full xs:w-full md:w-[30%]" />
                <article className="flex flex-col xs:p-12 md:p-8 md:w-[40%] gap-y-4 h-full md:justify-center">
                    <h4 className="xs:text-lg md:text-base font-bold uppercase tracking-comfy">{Text.title}</h4>
                    <p className="xs:text-lg md:text-sm font-medium text-mid/80">{Text.content}</p>
                </article>
                <img src={Light} alt="light-about" className="h-full  xs:w-full md:w-[30%]" />
            </div>
        </section>
     );
}
 
export default About;