import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";



export function Definition({children}:{children?:ReactNode}){
    
    const bgColor = "bg-purple-4";

    return <div style={{top:"100px"}} style={{height:window.innerHeight*2}} className="position-r top-10 w-100  d-bloc ">
        <div style={{height:window.innerHeight*2}} className="d-flex jC-center fd-column">
            <div className={"w-100 h-10 t-top-left m-0 " + bgColor}></div>
            <div className={"w-100 h-90 m-0 d-flex fd-column jC-center " + bgColor} id="Definition">
                <div
                    className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Définition
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


