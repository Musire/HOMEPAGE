import { SlideProvider } from "../context/SlideContext";
import { Navbar, Hero, About, Slider } from "./"

const HomePage = () => {
    return ( 
        <section className="section-container flex-col">
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