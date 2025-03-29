import { createContext, ReactNode, useRef, useState } from "react";
import { sizeInterface, WindowSizeInterface } from "../core/interface";



export const sizeContext = createContext<WindowSizeInterface | undefined>(
    undefined
)

export function SizeProvider({children}:{children:ReactNode}){
    const [size,setSize] = useState<sizeInterface>({
        height: window.innerHeight,
        width: window.innerWidth
    })

    return (
        <sizeContext.Provider value={{size,setSize}}>
            {children}
        </sizeContext.Provider>
    )


}


