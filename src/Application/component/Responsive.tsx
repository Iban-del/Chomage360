import { ReactNode } from "react";
import windowHook from "../hooks/windowHook";

export function ResponsiveSmaller({children,height,width}:{height:number|null,width:number|null,children:ReactNode}){

    const {size} = windowHook();
    if(size && size.size){
        const s = size.size;
        if((height === null || height >= s.height) && (width === null || width >= s.width)){
            return <>{children}</>
            
        }
        
    }
    
    return null;
}


export function ResponsiveBigger({children,height,width}:{height:number|null,width:number|null,children:ReactNode}){

    const {size} = windowHook();
    if(size && size.size){
        const s = size.size;
        if((height === null || height <= s.height) && (width === null || width <= s.width)){
            return <>{children}</>
            
        }
        
    }
    
    return null;
}