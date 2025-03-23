import { ButtonsNavBarInterface, SkillsInterface } from "./interface";
import { setClassResponsive, setStyleResponsive } from "./tools";

export const responsiveSize = 1270;

export const ButtonsNavBar:Array<ButtonsNavBarInterface> = [
    {
        title:"Définition",
        click:"#Definition",
        current: true
    },
    {
        title:"Effets positifs",
        click:"",
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
        click:"/a",
        current: false
    }
];

