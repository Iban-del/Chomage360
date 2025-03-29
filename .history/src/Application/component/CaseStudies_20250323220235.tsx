import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function CaseStudies({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-7";

    return <div style={{top:"100px"}}  className="position-r top-10 w-100 d-bloc ">
        <div style={{height:window.innerHeight}} className={"d-flex jC-center fd-column "+ bgColor} id="CaseStudies">
            <div
                className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
            >
                <h1
                    className={setClassResponsive("","","",null,responsiveSize)}
                >
                    Étude de cas
                </h1>
                <div className="bar-2 "></div>
            </div>
                
            <div
                className={setClassResponsive("h-85 w-100","","",null,responsiveSize)}
            >
        
            </div>
        </div>
        {children}
    </div>
}


