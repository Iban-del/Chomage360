import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { firstAdverseEffect, responsiveSize, secondAdverseEffect } from "../core/content";




export function AdverseEffects({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-6";

    return <div  className="position-r top-10 w-100 d-bloc ">
        <div style={{height:window.innerHeight*5}} className="d-flex jC-center fd-column">
        
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
                    <div className={setClassResponsive("h-25 w-70","","",null,responsiveSize)}>
                        {firstAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-25 w-100","","",null,responsiveSize)}>
                    
                    </div>
                    <div className={setClassResponsive("h-25 w-70","","",null,responsiveSize)}>
                        {secondAdverseEffect}
                    </div>
                    <div className={setClassResponsive("h-25 w-100","","",null,responsiveSize)}>

                    </div>
                </div>
            </div>

        </div>
        {children}
    </div>
}


