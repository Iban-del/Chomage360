import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Definition({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r top-10 w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight*2}} className="d-flex jC-center fd-column">
            <div className="w-100 h-10 bg-purple-6 t-top-left m-0"></div>
            <div className="w-100 h-80 bg-purple-6 m-0 d-flex fd-column jC-center" id="Definition">
                <div
                    className={setClassResponsive("h-15 w-100 d-flex jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Définition
                    </h1>
                    
                </div>
                <div className="bar-2 "></div>
                <div
                    className={setClassResponsive("h-85 w-100","","",null,responsiveSize)}
                >
                    
                </div>
            </div>
            <div className="w-100 h-10 bg-purple-6 t-button-right m-0"></div>
        </div>
        {children}
    </div>
}


