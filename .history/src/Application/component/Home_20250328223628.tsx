import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { HomeContent, responsiveSize } from "../core/content";
import { TextPopUp } from "./TextPopUp";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight*5}} className="d-flex jC-center fd-column al-center " id="Home">
            <div
                className="w-100 h-50"
            >
                <div
                    className={setClassResponsive("d-flex jC-center al-center fd-column","w-50","w-90",null,responsiveSize)}>
                    <h1 className={setClassResponsive("h-100 tx-left font-courier","font-size-a11","font-size-a11",null,responsiveSize)}>
                        Problématique:<br/>
                    </h1>
                    <h1 className={setClassResponsive(" tx-center","font-size-a10","font-size-a5",null,responsiveSize)}>
                        En quoi le gestion des <TextPopUp text="politiques de lutte contre le chômage" popUpText="test"/>
                        peuvent-elles
                        avoir un impact sur <TextPopUp text="l'efficience" popUpText="test"/>
                        des <TextPopUp text="finances publiques" popUpText="test"/>
                        ?
                    </h1>
                </div>

            </div>
            <div
                className="w-100 h-50"
            >
                <div
                    style={{height:window.innerHeight}}
                    className={setClassResponsive("h-100 d-flex jC-center al-center alC-center","w-50","w-90",null,responsiveSize)}
                >
                    <p>
                        {HomeContent}
                    </p>
                </div>
            </div>
            
        </div>
        {children}
    </div>
}


