import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



export function InFigure({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-9";

    return <div  className="position-r w-100 d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column">
            <div className={"w-100 h-100 m-0 " + bgColor} id="InFigure">
                <div
                    className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        En chiffre
                    </h1>
                    <div className="bar-2 "></div>
                </div>
                    
                <div
                    className={setClassResponsive("h-85 w-100","","",null,responsiveSize)}
                >
                
                </div>
            </div>
        </div>
        {children}
    </div>
}


