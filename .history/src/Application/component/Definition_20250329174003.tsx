import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { efficiency, keynesianPolicy, laborCostReductionPolicy, publicFinances, responsiveSize, trainingAndFlexibilizationPolicy, unemployment, unemploymentPolicies } from "../core/content";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";



export function Definition({children}:{children?:ReactNode}){
    
    const bgColor = "bg-bronze-4";

    return <div style={{top:"100px"}}  className="position-r top-10 w-100  d-bloc ">
        <div style={setStyleResponsive({height:window.innerHeight*4},{height:window.innerHeight*6},null,responsiveSize)} className="d-flex jC-center fd-column" >
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
                        className={setClassResponsive("p-10 alC-between w-100 h-100 d-flex jC-start fd-column","","",null,responsiveSize)}
                    >
                        <DefinitionBlock text={publicFinances} title={"Finances publiques (source Larousse)"} />
                        <DefinitionBlock text={unemployment} title={"Le chômage"} />
                        <DefinitionBlock text={unemploymentPolicies} title={"Politiques de lutte contre le chômage"} />
                        <DefinitionBlock text={efficiency} title={"Efficience"} />
                        <DefinitionBlock text={keynesianPolicy} title={"La politique de soutien de la demande globale (politique Keynésienne)"} />
                        <DefinitionBlock text={laborCostReductionPolicy} title={"La politique d’allègement du coût du travail"} />
                        <DefinitionBlock text={trainingAndFlexibilizationPolicy} title={"La politique de formation et de flexibilisation du marché du travail"} />
                    </div>
                </div>
            </div>
        
        </div>
        {children}
    </div>
}


function DefinitionBlock({text,title}:{text:string,title:string}){
    return <div
        className={setClassResponsive("bg-bronze-a9 p-2 br-4","m-5 w-50 h-400px alC-around","m-2 w-100",null,responsiveSize)}
    >
        <div
            className={setClassResponsive("","font-size-a8 ","",null,responsiveSize)}
        >
            {title}:
        </div>
        <br/>
        <div
            className={setClassResponsive("","font-size-a4","",null,responsiveSize)}
        >
            {text}
        </div>
    </div>
}