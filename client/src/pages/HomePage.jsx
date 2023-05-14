import { SlideProvider } from "../context/SlideContext";
import { Navbar, Hero, About, Slider } from "./"

const HomePage = () => {
    return ( 
        <section className="section-container xs:flex-col md:grid md:grid-rows-2 md:grid-cols-5 centered">
            <Navbar />
            <SlideProvider >
                <Slider />
            </SlideProvider>
            <Hero />
            <About />
        </section>
     );
}
 
export default HomePage;