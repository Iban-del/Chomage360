import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { defaultHeight, firstInFigure, responsiveSize, segondInFigure } from "../core/content";




export function InFigure({children}:{children?:ReactNode}){

    const bgColor = "bg-gray-a500";

    return <div  className="position-r w-100 d-bloc ">
        <div  style={setStyleResponsive({height:defaultHeight*1.5},{height:window.innerHeight*6},null,responsiveSize)} className="d-flex jC-center fd-column">
            <div className={"w-100 h-100 m-0 " + bgColor} id="InFigure">
                <div
                    className={setClassResponsive("h-5 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        En chiffre
                    </h1>
                    <div className="bar-2 "></div>
                </div>
                    
                <div
                    className={setClassResponsive("h-95 w-100 d-flex fd-column al-center ","","",null,responsiveSize)}
                >
                    <div className={setClassResponsive(" ","h-25 w-70","h-25 w-90",null,responsiveSize)}>
                        {firstInFigure}
                    </div>
                    <div className={setClassResponsive("d-flex jC-center alC-center","h-50","h-5 w-90",null,responsiveSize)}>
                        <img src="/PF.png" className="h-100 border-bronze-12 br-2"></img>
                    </div>
                    <div className={setClassResponsive("","h-25 w-70","w-90",null,responsiveSize)}>
                        {segondInFigure}
                    </div>

                </div>
            </div>
        </div>
        {children}
    </div>
}


