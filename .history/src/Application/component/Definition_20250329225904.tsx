import { ReactNode } from "react";
import { setClassResponsive, setStyleResponsive } from "../core/tools";
import { defaultHeight, efficiency, keynesianPolicy, laborCostReductionPolicy, publicFinances, responsiveSize, trainingAndFlexibilizationPolicy, unemployment, unemploymentPolicies } from "../core/content";




export function Definition({children}:{children?:ReactNode}){
    
    const bgColor = " bg-gray-a500  ";

    return <div style={{top:"100px"}}  className="position-r top-10 w-100  d-bloc ">
        <div style={setStyleResponsive({height:defaultHeight*4},{height:defaultHeight*7},null,responsiveSize)} className="d-flex jC-center fd-column" >
            <div className={"w-100 h-5 t-top-left m-0 " + bgColor} id="Definition" ></div>
            <div className={"w-100 h-95 m-0 d-flex fd-column jC-center " + bgColor} >
                <div
                    className={setClassResponsive("h-10 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        Définition
                    </h1>
                    <div className="bar-2 "></div>
                </div>
                
                <div
                    className={setClassResponsive("h-90 w-100","","",null,responsiveSize)}
                >
                    <div
                        className={setClassResponsive("p-10 alC-between w-100 h-100 d-flex jC-around fd-column","","",null,responsiveSize)}
                    >
                        <DefinitionBlock text={publicFinances} title={"Finances publiques (source Larousse)"} />
                        <DefinitionBlock text={unemployment} title={"Le chômage"} left={true} />
                        <DefinitionBlock text={unemploymentPolicies} title={"Politiques de lutte contre le chômage"} />
                        <DefinitionBlock text={efficiency} title={"Efficience"} left={true} />
                        <DefinitionBlock text={keynesianPolicy} title={"La politique de soutien de la demande globale (politique Keynésienne)"} />
                        <DefinitionBlock text={laborCostReductionPolicy} title={"La politique d’allègement du coût du travail"} left={true} />
                        <DefinitionBlock text={trainingAndFlexibilizationPolicy} title={"La politique de formation et de flexibilisation du marché du travail"} />
                    </div>
                </div>
            </div>
        
        </div>
        {children}
    </div>
}


function DefinitionBlock({text,title,left = false}:{text:string,title:string,left?:boolean}){

    const l = left ? " left-20" : " left-10";

    return <div
        className={setClassResponsive("bg-gray-a500 p-2 br-4 position-r","m-5 w-70 h-400px alC-around"+l,"m-2 w-100",null,responsiveSize)}
    >
        <div
            className={setClassResponsive("","font-size-a8 ","font-size-a8 ",null,responsiveSize)}
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