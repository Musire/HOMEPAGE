import { useState } from "react";
import { ReactComponent as Menu } from "../../assets/icons/icon-hamburger.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Close } from "../../assets/icons/icon-close.svg"

const Hero = () => {
    const [sidebar, setSidebar] = useState(false)
    
    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    return ( 
        <>
            <nav className="absolute top-0 left-0 z-30 w-screen h-20 text-white bg-transparent centered place-items-end">
                <div className="block-container flex items-center gap-x-[35%]">
                    <Menu viewBox="0 0 15 15" width="30" className="h-5" onClick={toggleSidebar} />
                    <Logo viewBox="25 -2 18 18" width="80" className="h-5 font-medium" />
                </div>
            </nav>
            {sidebar && 
            <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-black/75">
                <aside className="absolute top-0 left-0 w-full text-black bg-white h-36 centered easy-transition" >
                    <div className=" block-container spaced">
                        <Close viewBox="0 0 20 20" width={50}  height={35} onClick={toggleSidebar} />
                        <ul className="text-xl spaced gap-x-6">
                            <li className="">home</li>
                            <li className="">shop</li>
                            <li className="">about</li>
                            <li className="">contact</li>
                        </ul>
                    </div>
                </aside>
            </div>
            }

        </>
        
     );
}
 
export default Hero;