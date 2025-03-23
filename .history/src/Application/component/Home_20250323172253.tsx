import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight-100}} className="d-flex jC-center">
            <div
                className={setClassResponsive("h-100 w-50 d-flex jC-center al-center fd-column","","fw-700 font-size-a10",null,responsiveSize)}>
                <h1 className={setClassResponsive("font-size-a10 tx-left","","",null,responsiveSize)}>
                    Problématique:<br/>
                </h1>
                <h1 className={setClassResponsive("font-size-a10 tx-center","","",null,responsiveSize)}>
                    En quoi le gestion des pratiques de lutte<br/>
                    contre le chômage peuvent-elles
                    avoir un impact sur l'éfficience des finances publiques?
                </h1>
            </div>
        </div>
        {children}
    </div>
}


