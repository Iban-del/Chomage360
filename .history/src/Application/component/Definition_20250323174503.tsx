import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Definition({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-a top-10 w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight*.9}} className="d-flex jC-center fd-column">
            <div className="w-100 h-10 bg-bronze-11 t-top-left"></div>
            <div className="w-100 h-80 bg-bronze-11 "></div>
            <div className="w-100 h-10 bg-bronze-11 t-button-right"></div>
        </div>
        {children}
    </div>
}


