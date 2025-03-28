import { useEffect, useState } from "react";
import windowHook from "../hooks/windowHook";
import { motion } from "framer-motion"; 
import { useFrame } from "@react-three/fiber";



export function setClassResponsive(commun:string,clasic:string,responsive:string,height:number|null,width:number|null){
    const {size} = windowHook();
    
    if((height !== null || width !== null) && size){
        const s = size.size;
        if((height !== null && s.height <= height) || (width !== null && s.width <= width)){
            return commun+" "+responsive
        }
    }
    
    return commun+" "+clasic;
    
}


export function setValueResponsive(clasic:any,responsive:any,height:number|null,width:number|null){
    const {size} = windowHook();
    
    if((height !== null || width !== null) && size){
        const s = size.size;
        if((height !== null && s.height <= height) || (width !== null && s.width <= width)){
            return responsive
        }
    }
    
    return clasic;
    
}

export function setStyleResponsive(clasic:object,responsive:object,height:number|null,width:number|null){
    const {size} = windowHook();
    
    if((height !== null || width !== null) && size){
        const s = size.size;
        if((height !== null && s.height <= height) || (width !== null && s.width <= width)){
            return responsive
        }
    }
    
    return clasic;
    
}


export function TextAnnimation({textValue,animateText,duration= 1500}:{textValue:string,animateText:string,duration?:number}){
    const [text,setText] = useState<string>(animateText);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(prevText => (prevText === "" ? animateText: ""));
            
        },2000)

        return () => clearInterval(interval)
    },[])


    return  <motion.h1
                transition={{duration:duration}}
                initial={{opacity:0}}
                animate={{opacity:1}}
            >
                {textValue}{text}
            </motion.h1>
}


