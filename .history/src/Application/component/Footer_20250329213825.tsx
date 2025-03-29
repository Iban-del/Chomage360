import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";
import { sourceInterface } from "../core/interface";


const sources:Array<sourceInterface> = [
    {
        text: "Capital.fr. « Sortie de crise : Comment l’Espagne nous fait la leçon », 5 mai 2015.",
        url: "https://www.capital.fr/economie-politique/sortie-de-crise-comment-l-espagne-nous-fait-la-lecon-1036642"
    },
    {
        text: "« Causes et conséquences du chômage ? - Mouvement Pour un Développement HumainMouvement Pour un Développement Humain ». Consulté le 29 mars 2025.",
        url: "https://www.mouvementpourundeveloppementhumain.fr/causes-et-consequences-du-chomage/#_ftn17"
    },
    {
        text: "« Chapitre 3 : Comment lutter contre le chômage ? » Consulté le 5 mars 2025.",
        url: "https://www.ses-noailles.fr/cours/Terminale/Science-economique/Chapitre-3-:-Comment-lutter-contre-le-chomage/"
    },
    {
        text: "« Comment fonctionne le financement de l’Assurance chômage ? | Unédic.org ». Consulté le 5 mars 2025.",
        url: "https://www.unedic.org/lassurance-chomage-en-france/comment-fonctionne-le-financement-de-l-assurance-chomage"
    },
    {
        text: "« Définition - Dépense pour l’emploi | Insee ». Consulté le 5 mars 2025.",
        url: "https://www.insee.fr/fr/metadonnees/definition/c1573"
    },
    {
        text: "« Dépenses en faveur de l’emploi et du marché du travail en 2022 », s. d.",
        url: ""
    },
    {
        text: "elysee.fr. « Objectif plein emploi. », 20 mars 2022.",
        url: "https://www.elysee.fr/emmanuel-macron/objectif-plein-emploi"
    },
    {
        text: "« Économie du Portugal ». In Wikipédia, 11 février 2025.",
        url: "https://fr.wikipedia.org/w/index.php?title=%C3%89conomie_du_Portugal&oldid=222921227"
    },
    {
        text: "« En Espagne et au Portugal, le défi de faire adopter le budget par un Parlement fragmenté ». Consulté le 24 mars 2025.",
        url: "https://www.lemonde.fr/economie/article/2024/10/12/en-espagne-et-au-portugal-le-defi-de-faire-adopter-le-budget-par-un-parlement-fragmente_6349758_3234.html?utm_source=chatgpt.com"
    },
    {
        text: "« Évaluations des voies et moyens - tome 2 - Dépenses fiscales | budget.gouv.fr ». Consulté le 5 mars 2025.",
        url: "https://www.budget.gouv.fr/documentation/documents-annexes-evaluation/evaluations-voies-moyens-tome-2"
    },
    {
        text: "« Les dépenses publiques en faveur de l’emploi ». Consulté le 5 mars 2025.",
        url: "https://www.fipeco.fr/fiche/Les-d%C3%A9penses-publiques-en-faveur-de-lemploi"
    },
    {
        text: "« Les principales politiques de lutte contre le chômage - digiSchool ». Consulté le 5 mars 2025.",
        url: "https://www.digischool.fr/cours/les-principales-politiques-de-lutte-contre-le-chomage"
    },
    {
        text: "« Plein-emploi : Emmanuel Macron durcit le ton pour répondre à son obsession ». Consulté le 5 mars 2025.",
        url: "https://www.lemonde.fr/politique/article/2024/01/26/plein-emploi-macron-durcit-le-ton-pour-repondre-a-son-obsession_6213157_823448.html"
    }
];



export function Footer({children}:{children?:ReactNode}){



    const bgColor = "bg-purple-a10";

    const elementsSources = sources.map((element)=>{
        return <p>
            -{element.text}<br/>
            <a
                className="color-blue-12 text-decoration-1"
                href={element.url}
            >
                {element.url}
            </a>
        </p>
    })

    return <div   className="position-r w-100 d-bloc ">
        <div style={{height:window.innerHeight}} className={"h-100 d-flex jC-center fd-column "+bgColor} id="PositiveEffect">
            <div className={setClassResponsive("","","",null,responsiveSize)}>
                {elementsSources}
            </div>
        </div>
        {children}
    </div>
}
