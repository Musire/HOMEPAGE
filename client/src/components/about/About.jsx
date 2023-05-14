import Dark from "../../assets/image-about-dark.jpg"
import Light from "../../assets/image-about-light.jpg"
import { AboutSection as Text } from "../../constants/Text"

const About = () => {
    return ( 
        <section className="font-normal bg-white section-container md:row-start-2 md:col-span-5">
            <div className="xs:flex-col md:flex-row block-container xs:w-full">
                <img src={Dark} alt="dark-about" className="xs:w-full md:w-1/3" />
                <article className="flex flex-col p-12 gap-y-4">
                    <h4 className="text-lg uppercase tracking-superwide">{Text.title}</h4>
                    <p className="text-lg text-mid/80">{Text.content}</p>
                </article>
                <img src={Light} alt="light-about" className="xs:w-full md:w-1/3" />
            </div>
        </section>
     );
}
 
export default About;