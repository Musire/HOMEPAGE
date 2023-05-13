import Dark from "../../assets/image-about-dark.jpg"
import Light from "../../assets/image-about-light.jpg"
import { AboutSection as Text } from "../../constants/Text"

const About = () => {
    return ( 
        <section className="section-container bg-white font-normal pb-8">
            <div className="block-container flex-col">
                <img src={Dark} alt="dark-about" className="" />
                <article className="flex flex-col gap-y-4 p-8">
                    <h4 className="text-lg uppercase tracking-superwide">{Text.title}</h4>
                    <p className="text-mid/80 text-base">{Text.content}</p>
                </article>
                <img src={Light} alt="light-about" className="" />
            </div>
        </section>
     );
}
 
export default About;