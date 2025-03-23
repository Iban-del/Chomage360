import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function InFigure({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r top-10 w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column">
            <div className="w-100 h-10 bg-bronze-11 t-top-left m-0"></div>
            <div className="w-100 h-80 bg-bronze-11 m-0"></div>
            <div className="w-100 h-10 bg-bronze-11 t-button-right m-0"></div>
        </div>
        {children}
    </div>
}


