import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Definition({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column">
            <div className="w-100 h-300px bg-bronze-11 t-top-left"></div>
            <div className="w-100 h-300px bg-bronze-11 t-button-right"></div>
        </div>
        {children}
    </div>
}


