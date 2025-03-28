import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { publicFinances, responsiveSize } from "../core/content";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";



export function Definition({children}:{children?:ReactNode}){
    
    const bgColor = "bg-bronze-4";

    return <div style={{top:"100px"}}  className="position-r top-10 w-100  d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column" >
            <div className={"w-100 h-10 t-top-left m-0 " + bgColor} id="Definition" ></div>
            <div className={"w-100 h-90 m-0 d-flex fd-column jC-center " + bgColor} >
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
                    <div
                        className={setClassResponsive("f-flex jC-center al-center alC-around w-100 h-100","","",null,responsiveSize)}
                    >
                        <DefinitionBlock text={publicFinances} title={"Finances publiques (source Larousse)"} />
                    </div>
                </div>
            </div>
        
        </div>
        {children}
    </div>
}


function DefinitionBlock({text,title}:{text:string,title:string}){
    return <div
        className={setClassResponsive("w-100","h-200px f-flex jC-center al-center alC-around","",null,responsiveSize)}
    >
        <div
            className={setClassResponsive("","","",null,responsiveSize)}
        >
            {title}
        </div>

        <div
            className={setClassResponsive("","","",null,responsiveSize)}
        >
            {text}
        </div>
    </div>
}