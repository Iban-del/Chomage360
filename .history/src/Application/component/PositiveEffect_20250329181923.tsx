import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { firstPositiveEffect, responsiveSize, segondPositiveEffect } from "../core/content";




export function PositiveEffect({children}:{children?:ReactNode}){

    const bgColor = "bg-bronze-5";

    return <div   className="position-r top-10 w-100  d-bloc ">
        <div style={setStyleResponsive({height:window.innerHeight*2},{height:window.innerHeight},null,responsiveSize)} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
            <div
                    className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
            >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Effets positifs
                    </h1>
                    <div className="bar-2 "></div>
            </div>
                
            <div
                className={setClassResponsive("h-85 w-100 d-flex jC-center fd-column","","",null,responsiveSize)}
            >
                <div className={setClassResponsive("h-25 w-50","","",null,responsiveSize)}>
                    {firstPositiveEffect}
                </div>
                <div className={setClassResponsive("h-50 w-100","","",null,responsiveSize)}>
                    <img src=""></img>
                </div>
                <div className={setClassResponsive("h-25 w-50","","",null,responsiveSize)}>
                    {segondPositiveEffect}
                </div>
            </div>
        </div>
        {children}
    </div>
}


