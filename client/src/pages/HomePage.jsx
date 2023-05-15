import { SlideProvider } from "../context/SlideContext";
import { Navbar, Hero, About, Slider } from "./"

const HomePage = () => {
    return ( 
        <section className="gap-0 block-container md:grid md:grid-cols-5">
            <SlideProvider >
                <Slider />
            </SlideProvider>           
        </section>
     );
}
 
export default HomePage;