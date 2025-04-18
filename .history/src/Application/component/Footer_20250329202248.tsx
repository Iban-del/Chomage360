import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Footer({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-10";

    return <div   className="position-r w-100 d-bloc ">
        <div style={{height:window.innerHeight*.5}} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
        
        </div>
        {children}
    </div>
}
