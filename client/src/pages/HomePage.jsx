import { Hero, About, Slider } from "./"

const HomePage = () => {
    return ( 
        <section className="bg-white xs:w-full lg:w-4/5 desktop:w-5/6 h-screen md:grid md:grid-cols-[1.5fr_1.1fr] md:grid-rows-[60%_50%]">
            <Slider />
            <Hero />
            <About />      
        </section>
     );
}
 
export default HomePage;