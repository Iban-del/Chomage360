import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { efficiency, HomeContent, responsiveSize, unemploymentPolicies } from "../core/content";
import { TextPopUp } from "./TextPopUp";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight*0.9}} className="d-flex jC-center" id="Home">
            <div
                className={setClassResponsive("h-100 d-flex jC-center al-center fd-column","w-50","w-90",null,responsiveSize)}>
                <h1 className={setClassResponsive(" tx-left font-courier","font-size-a11","font-size-a10",null,responsiveSize)}>
                    Problématique:<br/>
                </h1>
                <h1 className={setClassResponsive(" tx-center","font-size-a10","font-size-a3",null,responsiveSize)}>
                    En quoi le gestion des <TextPopUp text="politiques de lutte contre le chômage" popUpText={unemploymentPolicies}/>
                    peuvent-elles
                    avoir un impact sur <TextPopUp text="l'efficience" popUpText={efficiency} />
                    des <TextPopUp text="finances publiques" popUpText="test"/>
                    ?
                </h1>
                
            </div>
        </div>
        <div style={setStyleResponsive({height:window.innerHeight*2},{height:window.innerHeight*4},null,responsiveSize)} className="d-flex jC-center" id="Home">
            <div
                className={setClassResponsive("h-100 d-flex jC-center al-center fd-column ","font-size-a6 w-50","font-size-a2 w-90 tx-center ",null,responsiveSize)}>
                <p>
                    {HomeContent}
                </p>
            </div>
        </div>
        {children}
    </div>
}


