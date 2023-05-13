import { useState } from "react";
import { createContext } from "react";

export const SlideContext = createContext()

export const SlideProvider = ({ children }) => {
    const [current, setCurrent] = useState(1)

    const increase = () => {
        setCurrent(prev => prev + 1)
    }

    const decrease = () => {
        setCurrent(prev => prev - 1)
    }

    const slideContext = { current, increase, decrease }
    
    return <SlideContext.Provider value={slideContext} >{ children }</SlideContext.Provider>
}