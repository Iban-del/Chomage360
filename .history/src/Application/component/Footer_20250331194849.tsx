import { ReactNode } from "react";
import { sourceInterface } from "../core/interface";

const sources: Array<sourceInterface> = [
    {
        text: "Capital.fr. « Sortie de crise : Comment l’Espagne nous fait la leçon », 5 mai 2015.",
        url: "https://www.capital.fr/economie-politique/sortie-de-crise-comment-l-espagne-nous-fait-la-lecon-1036642"
    },
    {
        text: "« Causes et conséquences du chômage ? - Mouvement Pour un Développement Humain ». Consulté le 29 mars 2025.",
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

export function Footer({ children }: { children?: ReactNode }) {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-5">Sources</h2>
                <ul className="space-y-4">
                    {sources.map((source, index) => (
                        <li key={index} className="text-sm">
                            {source.text} <br />
                            <a
                                className="text-blue-400 hover:text-blue-300 underline"
                                href={source.url}

                            >
                                {source.url}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Elouane DELETOILLE-ELIZALDE - Flora VIANNAIS</p>
                </div>
            </div>
            {children}
        </footer>
    );
}
