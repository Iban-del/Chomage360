import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight-100}}>
            <div
                className={setClassResponsive("h-100 w-100 d-flex jC-center al-center","","fw-700 font-size-a10",null,responsiveSize)}>
                <h1 className={setClassResponsive("font-size-a10 tx-center","","",null,responsiveSize)}>
                    Problématique:<br/>
                    En quoi le gestion des pratiques de lutte<br/>
                    contre le chômage peuvent-elles<br/>
                    avoir un impact sur l'éfficience des finances publiques?
                </h1>
            </div>
        </div>
        {children}
    </div>
}


