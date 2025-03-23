import { createContext, ReactNode, useRef, useState } from "react";
import { sizeInterface, WindowCanvasInterface, WindowScrollInterface, WindowSizeInterface } from "../core/interface";
import { PerspectiveCamera } from "three";


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

export const CanvasContext = createContext<WindowCanvasInterface|undefined>(
    undefined
)

export function CanvasProvider({children}:{children:ReactNode}){
    const canvasRef = useRef<PerspectiveCamera>(null);

    return (
        <CanvasContext.Provider value={{ canvasRef }}>
            {children}
        </CanvasContext.Provider>
    )

}


export const StateContext = createContext<WindowScrollInterface|undefined>(
    undefined
)

export function StateProvider({children}:{children:ReactNode}){
    const [state ,setState] = useState<number>(0)

    return (
        <StateContext.Provider value={{state ,setState}}>
            {children}
        </StateContext.Provider>
    )

}

