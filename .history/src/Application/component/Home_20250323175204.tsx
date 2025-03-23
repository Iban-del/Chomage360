import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight*0.9}} className="d-flex jC-center">
            <div
                className={setClassResponsive("h-100 d-flex jC-center al-center fd-column","w-50","w-90",null,responsiveSize)}>
                <h1 className={setClassResponsive(" tx-left","font-size-a10","font-size-a10",null,responsiveSize)}>
                    Problématique:<br/>
                </h1>
                <h1 className={setClassResponsive(" tx-center","font-size-a10","font-size-a5",null,responsiveSize)}>
                    En quoi le gestion des pratiques de lutte
                    contre le chômage peuvent-elles
                    avoir un impact sur l'éfficience des finances publiques?
                </h1>
            </div>
        </div>
        {children}
    </div>
}


