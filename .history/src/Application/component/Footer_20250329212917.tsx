import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";




export function Footer({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-a10";

    return <div   className="position-r w-100 d-bloc ">
        <div style={{height:window.innerHeight*.5}} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
            <div className={setClassResponsive("","","",null,responsiveSize)}>
                <p>
                Capital.fr. « Sortie de crise : Comment l’Espagne nous fait la leçon », 5 mai 2015.<br/>
                https://www.capital.fr/economie-politique/sortie-de-crise-comment-l-espagne-nous-fait-la-lecon-1036642.
                </p>
            </div>
        </div>
        {children}
    </div>
}
