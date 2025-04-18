import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { defaultHeight, firstPositiveEffect, responsiveSize, segondPositiveEffect } from "../core/content";




export function PositiveEffect({children}:{children?:ReactNode}){

    const bgColor = "";

    return <div   className="position-r top-10 w-100  d-bloc ">
        <div style={setStyleResponsive({height:defaultHeight*3},{height:defaultHeight*3},null,responsiveSize)} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
            <div
                    className={setClassResponsive("w-100 d-flex fd-column jC-center al-center font-size-a11","h-15 ","h-5",null,responsiveSize)}
            >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Effets positifs
                    </h1>
                    <div className="bar-2 "></div>
            </div>
                
            <div
                className={setClassResponsive(" w-100 d-flex al-center fd-column","font-size-a4 h-85","h-95",null,responsiveSize)}
            >
                <div className={setClassResponsive("p-2 h-25 ","w-70","w-100",null,responsiveSize)}>
                    {firstPositiveEffect}
                </div>
                <div className={setClassResponsive("h-50 w-100","","",null,responsiveSize)}>
                    <img src=""></img>
                </div>
                <div className={setClassResponsive("p-2 h-25 ","w-70","w-100",null,responsiveSize)}>
                    {segondPositiveEffect}
                </div>
            </div>
        </div>
        {children}
    </div>
}


