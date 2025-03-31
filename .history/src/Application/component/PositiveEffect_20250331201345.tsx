import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { defaultHeight, firstPositiveEffect, responsiveSize, segondPositiveEffect } from "../core/content";




export function PositiveEffect({children}:{children?:ReactNode}){

    const bgColor = "";

    return <div   className="position-r top-10 w-100  d-bloc ">
        <div style={setStyleResponsive({height:defaultHeight*3},{height:defaultHeight*4},null,responsiveSize)} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
            <div
                    className={setClassResponsive("w-100 d-flex fd-column al-center font-size-a11","h-15 jC-center","h-5 jC-center",null,responsiveSize)}
            >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Effets positifs
                    </h1>
                    <div className="bar-2 "></div>
            </div>
                
            <div
                className={setClassResponsive(" w-100 d-flex al-center jC-evenly  fd-column","font-size-a4 h-85","h-95",null,responsiveSize)}
            >
                <div className={setClassResponsive("p-2 d-flex al-center jC-center ","w-70 h-40","w-100",null,responsiveSize)}>
                    {firstPositiveEffect}
                </div>
                <div className={setClassResponsive("w-100","h-20","",null,responsiveSize)}>
                    <img src="/coutPolitique.png" className="w-100 border-bronze-12"></img>
                </div>
                <div className={setClassResponsive("p-2 d-flex al-center jC-center","h-40 w-70","w-100",null,responsiveSize)}>
                    {segondPositiveEffect}
                </div>
            </div>
        </div>
        {children}
    </div>
}


