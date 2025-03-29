import { useRef, useState } from "react";
import { TextPopUpInterface } from "../core/interface";
import { motion ,AnimatePresence } from "framer-motion"; 
import { responsiveSize } from "../core/content";

export function TextPopUp({
    text,
    popUpText,
    icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
}:TextPopUpInterface){

    const [showPopUp,setShowPopUp] = useState(false);

    if(responsiveSize <= window.innerWidth){
        return <>



            <p 
                className="d-inline cursor-pointer text-decoration-2"
                onMouseOver={() => setShowPopUp(true)}
                onMouseOut={() => setShowPopUp(false)}
            >
                {text}
            </p>
            {" "}

            <AnimatePresence>
                    {showPopUp && (
                        <motion.div
                            key="popup"
                            className="position-a br-2  h-20 w-50 bg-gray-900 text-white top-5 -translate-x-1/2 left-1/2"
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center mb-2">
                                <div className="mr-2">{icon}</div>
                                <span className="font-semibold">{text}</span>
                            </div>
                            <div className="h-px bg-white my-2 "></div>
                            <div className="text-sm font-size-a3">{popUpText}</div>
                        </motion.div>
                    )}
            </AnimatePresence>
        </>;
    }

    return <>
        <p 
            className="d-inline"
            onMouseOver={() => setShowPopUp(true)}
            onMouseOut={() => setShowPopUp(false)}
        >
            {text}
        </p>
        {" "}
    </>
}

