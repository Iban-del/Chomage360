import { useRef, useState } from "react";
import { TextPopUpInterface } from "../core/interface";
import { motion } from "framer-motion"; 

export function TextPopUp({
    text,
    popUpText,
    icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
}:TextPopUpInterface){

    const [showPopUp,setShowPopUp] = useState(false);

    const onOver = <motion.div 
                        className="position-a h-20 w-50 bg-bronze-a10 top-5 left-50"
                        initial={{x:"100%"}}
                        animate={{x:"0%"}}
                        exit={{x:"100%"}}
                    >
                        <div className="h-20 al-center">
                            <div>
                                {icon}
                            </div>
                            <div>
                                {icon}
                            </div>
                            
                        </div>
                        <div className="bar-1"></div>
                        <div className="h-80">
                            {popUpText}
                        </div>
                    </motion.div>
    

    return <>

        {showPopUp && onOver}

        <p 
            onMouseOver={() => setShowPopUp(true)}
            onMouseOut={() => setShowPopUp(false)}
        >
            {text}
        </p>
    </>;
}

