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



export const Graph:Array<SkillsInterface> = [
    {
        title:"PHP",
        percentage:20,
        type:"back"
    },
    {
        title:"JavaScript",
        percentage:20,
        type:"front"
    },
    {
        title:"Python",
        percentage:20,
        type:["back","front"]
    }
];

export const HowIAm= `Je m'appelle Iban Deletoille-Elizalde\net je suis développeur informatique passionné par la création de solutions innovantes et performantes.\n\nDiplômé d'un Bac Pro SN RISC\n(Systèmes Numériques – Option Réseaux et Informatique),\nj'ai acquis des compétences solides en développement informatique et en gestion de projets techniques.\n\nActuellement, je travaille en tant que développeur chez Network Informatique,\nou je mets mes connaissances au service de divers projets de développement web et d’applications.\n\nMon objectif est de toujours améliorer mes compétences techniques\ntout en contribuant à des projets enrichissants qui répondent aux besoins des utilisateurs et des entreprises.`;
export const HowIAmResponsive= `Je m'appelle Iban Deletoille-Elizalde\net je suis développeur informatique passionné par la création de solutions innovantes et performantes.\n\nDiplômé d'un Bac Pro SN RISC\n(Systèmes Numériques – Option Réseaux et Informatique),\nj'ai acquis des compétences solides en développement informatique et en gestion de projets techniques.\n\nActuellement, je travaille en tant que développeur chez Network Informatique,\noù je mets mes connaissances au service de divers projets de développement web et d’applications.\n\nMon objectif est de toujours améliorer mes compétences techniques\ntout en contribuant à des projets enrichissants qui répondent aux besoins des utilisateurs et des entreprises.`;
