import { ButtonsNavBarInterface, SkillsInterface } from "./interface";
import { setClassResponsive, setStyleResponsive } from "./tools";

export const responsiveSize = 850;

export const ButtonsNavBar:Array<ButtonsNavBarInterface> = [
    {
        title:"Qui suis-je",
        click:"/a",
        current: true
    },
    {
        title:"Projets",
        click:"",
        current: false
    },
    {
        title:"Compétences",
        click:"/a",
        current: false
    },
    {
        title:"Contacter",
        click:"/a",
        current: false
    }
];

