import { ButtonsNavBarInterface, SkillsInterface } from "./interface";
import { setClassResponsive, setStyleResponsive } from "./tools";

export const responsiveSize = 850;

export const ButtonsNavBar:Array<ButtonsNavBarInterface> = [
    {
        title:"Définition",
        click:"/a",
        current: true
    },
    {
        title:"Effets positifs",
        click:"",
        current: false
    },
    {
        title:"Effets néfastes",
        click:"/a",
        current: false
    },
    {
        title:"Étude de cas",
        click:"/a",
        current: false
    },
    {
        title:"En chiffre",
        click:"/a",
        current: false
    }
];

