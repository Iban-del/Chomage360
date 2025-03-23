import { ReactNode } from "react";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight-100}}>
            <div>
                <h1>
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


