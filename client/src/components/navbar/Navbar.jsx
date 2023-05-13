import {ReactComponent as Menu} from "../../assets/icons/icon-hamburger.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"

const Hero = () => {
    return ( 
        <>
            <nav className="h-20 w-screen absolute top-0 left-0 bg-transparent text-white centered z-50">
                <div className="block-container flex items-center gap-x-[50%]">
                    <Menu />
                    <Logo className="place-self-center font-medium" />
                </div>
            </nav>
        </>
        
     );
}
 
export default Hero;