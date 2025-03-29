import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { firstAdverseEffect, responsiveSize, secondAdverseEffect, thirdAdverseEffect } from "../core/content";




export function AdverseEffects({children}:{children?:ReactNode}){

    const bgColor = "";

    return <div  className="position-r top-10 w-100 d-bloc ">
        <div style={setStyleResponsive({height:defaultHeight*3},{height:window.innerHeight*8},null,responsiveSize)} className={"h-100 d-flex jC-center fd-column "+bgColor} className="d-flex jC-center fd-column">
        
            <div className={"w-100 h-100 m-0 "+bgColor} id="AdverseEffects">
                <div
                        className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                    >
                        <h1
                            className={setClassResponsive("","","",null,responsiveSize)}
                        >
                            Effets néfastes
                        </h1>
                        <div className="bar-2 "></div>
                </div>
                    
                <div
                    className={setClassResponsive("h-85 w-100 d-flex fd-column al-center ","","",null,responsiveSize)}
                >
                    <div className={setClassResponsive("h-20 w-70","","",null,responsiveSize)}>
                        {firstAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-20 w-100","","",null,responsiveSize)}>
                    
                    </div>
                    <div className={setClassResponsive("h-20 w-70","","",null,responsiveSize)}>
                        {secondAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-20 w-100","","",null,responsiveSize)}>

                    </div>
                    <div className={setClassResponsive("h-20 w-70","","",null,responsiveSize)}>
                        {thirdAdverseEffect}
                    </div>
                </div>
            </div>

        </div>
        {children}
    </div>
}


