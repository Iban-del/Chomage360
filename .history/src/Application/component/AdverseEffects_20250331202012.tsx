import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { defaultHeight, firstAdverseEffect, responsiveSize, secondAdverseEffect, thirdAdverseEffect } from "../core/content";




export function AdverseEffects({children}:{children?:ReactNode}){

    const bgColor = "bg-gray-a500";

    return <div  className="position-r top-10 w-100 d-bloc ">
        <div style={setStyleResponsive({height:defaultHeight*5},{height:defaultHeight*7},null,responsiveSize)} className="d-flex jC-center fd-column">
        
            <div className={"w-100 h-100 m-0 "+bgColor} id="AdverseEffects">
                <div
                        className={setClassResponsive("h-5 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                    >
                        <h1
                            className={setClassResponsive("","","",null,responsiveSize)}
                        >
                            Effets néfastes
                        </h1>
                        <div className="bar-2 "></div>
                </div>
                    
                <div
                    className={setClassResponsive("h-95 w-100 d-flex alC-between fd-column al-center ","","",null,responsiveSize)}
                >
                    <div className={setClassResponsive("h-20 ","w-70","w-90",null,responsiveSize)}>
                        {firstAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-20 w-100","","w-90",null,responsiveSize)}>
                        <img src="/depencePourEmploi.png" className="w-50 border-bronze-12 br-2"></img>
                    </div>
                    <div className={setClassResponsive("h-30 d-flex jC-center"," w-70","w-90",null,responsiveSize)}>
                        {secondAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-20 w-100","","w-90",null,responsiveSize)}>
                    <img src="/soldeFp.png" className="h-120 border-bronze-12 br-2"></img>
                    </div>
                    <div className={setClassResponsive("h-10 d-flex jC-center"," w-70","w-90",null,responsiveSize)}>
                        {thirdAdverseEffect}
                    </div>
                </div>
            </div>

        </div>
        {children}
    </div>
}


