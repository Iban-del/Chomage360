import { ButtonsNavBar, responsiveSize } from '../core/content'
import { DropDownListInterface } from '../core/interface'
import "../../css/navBar.css"
import { motion } from "framer-motion"; 
import { ResponsiveBigger, ResponsiveSmaller } from './Responsive';
import { Button } from './button/Button';
import { IconButton } from './button/IconButton';
import { useState } from 'react';
import { setClassResponsive } from '../core/tools';


export function NavBar() {

    const [showDropDownList,setShowDropDownList] = useState<number>(0);
    const dropDownListClick = (event: React.MouseEvent)=>{
        event.preventDefault();
        setShowDropDownList(Math.abs(showDropDownList-1));
    }

    /** création des bouttons */
    const buttons = ButtonsNavBar.map((element)=>{
        if(element){
            return <Button key={element.title} title={element.title} href={element.click} ></Button>
        }
    })
    
    return (
        <div>
            <div className={setClassResponsive(
                                    "h-100px w-100 d-flex al-center position-f z-99 bg-purple-9","","",
                                    null,
                                    responsiveSize
            )}>
                        <ResponsiveBigger height={null} width={850}>
                            <div className='d-flex jC-between p-2 h-100 w-50 alC-center al-center'>
                                <h1 className='font-size-a6 '>Chômage 360</h1>
                            </div>
                            <div className='p-2 d-flex jC-end h-100 w-50 al-end alC-center al-center'>
                                {buttons}
                            </div>
                        </ResponsiveBigger>
                        <ResponsiveSmaller height={null} width={850}>
                            <div className='d-flex jC-start p-2 h-100 w-80 alC-center'>
                                <h6 className='font-size-a4 '>Chômage 360</h6>
                            </div>
                            <div className='p-2 d-flex jC-end h-100 w-20 al-end al-center'>
                                <IconButton click={dropDownListClick} icons={[<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>]}></IconButton>
                            </div>
                        </ResponsiveSmaller>
            </div>
            {showDropDownList ===1  && <DropDownList buttons={buttons}></DropDownList>}
        </div>
        
    );
}

function DropDownList({buttons}:DropDownListInterface){
    return (
        <motion.div 
            className='position-a bg-gray left-50 h-300px w-50 bg-blue-a2  d-flex fd-column jC-evenly z-100'
            style={{ top: "100px" }}
            initial={{y:"-100%"}}
            animate={{y:"0%"}}
        >
            {buttons}
        </motion.div>
    );
}

