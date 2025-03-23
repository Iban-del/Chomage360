import { ReactNode } from "react";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight-100}}>
            
            <div style={{fontSize:100}} className="position-a h-100 w-100 z-2 d-flex al-center jC-center z-99">
                <p id="how-i-am" className="font-size-a4 w-50 position-r">
                Je m'appelle Iban Deletoille-Elizalde<br/>
                et je suis développeur informatique passionné par la création de solutions innovantes et performantes.<br/><br/>
                
                Diplômé d'un Bac Pro SN RISC<br/>
                (Systèmes Numériques – Option Réseaux et Informatique),<br/>
                j'ai acquis des compétences solides en développement informatique et en gestion de projets techniques.<br/><br/>

                Actuellement, je travaille en tant que développeur chez Etwork Informatique,<br/>
                où je mets mes connaissances au service de divers projets de développement web et d’applications.<br/><br/>

                Mon objectif est de toujours améliorer mes compétences techniques<br/>
                tout en contribuant à des projets enrichissants qui répondent aux besoins des utilisateurs et des entreprises.<br/>
                </p>
                
            </div>
        </div>
        {children}
    </div>
}


