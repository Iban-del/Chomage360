import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { caseStudies, defaultHeight, responsiveSize } from "../core/content";




export function CaseStudies({children}:{children?:ReactNode}){
    const bgColor = "";

    return <div  className="position-r top-10 w-100 d-bloc " id="CaseStudies">
        <div style={setStyleResponsive({height:defaultHeight},{height:defaultHeight*2},null,responsiveSize)} className={"d-flex jC-center fd-column "+ bgColor} >
            <div
                className={setClassResponsive(" w-100 d-flex fd-column jC-center al-center font-size-a11","h-10","h-5",null,responsiveSize)}
            >
                <h1
                    className={setClassResponsive("","","",null,responsiveSize)}
                >
                    Étude de cas
                </h1>
                <div className="bar-2 "></div>
            </div>
                
            <div
                className={setClassResponsive(" w-100 d-flex JC-center al-center fd-column","font-size-a4 h-90","h-95",null,responsiveSize)}
            >
                <div className={setClassResponsive("p-2 h-100 ","w-70","w-100",null,responsiveSize)}>
                    {caseStudies}
                </div>
        
            </div>
        </div>
        {children}
    </div>
}


