import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function PositiveEffect({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r top-10 w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column" id="PositiveEffect">
        
        </div>
        {children}
    </div>
}


