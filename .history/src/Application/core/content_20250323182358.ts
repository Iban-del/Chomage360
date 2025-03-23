import { ButtonsNavBarInterface, SkillsInterface } from "./interface";
import { setClassResponsive, setStyleResponsive } from "./tools";

export const responsiveSize = 1270;

export const ButtonsNavBar:Array<ButtonsNavBarInterface> = [
    {
        title:"Accueil",
        click:"#Home",
        current: true
    },
    {
        title:"Définition",
        click:"#Definition",
        current: true
    },
    {
        title:"Effets positifs",
        click:"#PositiveEffect",
        current: false
    },
    {
        title:"Effets néfastes",
        click:"#AdverseEffects",
        current: false
    },
    {
        title:"Étude de cas",
        click:"#CaseStudies",
        current: false
    },
    {
        title:"En chiffre",
        click:"#InFigure",
        current: false
    }
];

