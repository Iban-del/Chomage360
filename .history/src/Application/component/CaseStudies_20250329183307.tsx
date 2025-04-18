import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { caseStudies, responsiveSize } from "../core/content";




export function CaseStudies({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-7";

    return <div  className="position-r top-10 w-100 d-bloc " id="CaseStudies">
        <div style={{height:window.innerHeight}} className={"d-flex jC-center fd-column "+ bgColor} >
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
                className={setClassResponsive("h-85 w-100 d-flex al-center fd-column","font-size-a4","",null,responsiveSize)}
            >
                <div className={setClassResponsive("p-2 h-100 ","w-50","w-100",null,responsiveSize)}>
                    {caseStudies}
                </div>
        
            </div>
        </div>
        {children}
    </div>
}


