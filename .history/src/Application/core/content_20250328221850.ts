import { ButtonsNavBarInterface, SkillsInterface } from "./interface";
import { setClassResponsive, setStyleResponsive } from "./tools";

export const responsiveSize = 1460;

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


export const HomeContent = `
    “La meilleure façon de lutter contre le chômage, c’est de travailler”, dit Raymond Barre. Cette solution semble si simple, s’il suffisait de travailler pour lutter contre le chômage, l’État n’aurait pas besoin d’intervenir en faveur de l’emploi. En effet, lorsque la conjoncture économique est bonne, le taux de chômage est en baisse seulement il ne baisse pas indéfiniment. À un moment, le taux d’embauche stagne du fait de plusieurs contraintes notamment le coût du travail qui reste élevé en France. L’objectif de plein-emploi est un idéal, ce n’est pas une réalité mais une ligne de conduite, le gouvernement en place cherche à s’en rapprocher afin de favoriser l’emploi, la demande et ainsi la croissance économique du pays. Par ailleurs, les causes du chômage sont multiples. On définit le chômage structurel qui va dépendre de la structure du marché du travail. On retrouve notamment des problèmes d’appariement entre l’offre et la demande, mais également des problèmes d’asymétrie d’informations. Le chômage peut, paradoxalement, résulter de règles mises en place en faveur des travailleurs. L’exemple le plus parlant est le SMIC, mis en oeuvre afin de garantir un revenu minimum pour les travailleurs, il peut aussi être la cause de chômage car cette main d’oeuvre coûte nécessairement plus chère et ainsi les entreprises ne veulent pas, parfois ne peuvent pas, trop embaucher du fait du coût du travailleur. Pour répondre à la lutte contre le chômage, plusieurs visions économiques se discutent. Selon les néoclassiques, la suppression du Smic devrait faire baisser le chômage. En effet, pour eux le marché du travail est un marché comme un autre où l’offre et la demande s’équilibre par la variation des prix. Le Smic est le salaire minimum en dessous duquel une entreprise n’a pas le droit de payer ses salariés. Or, l’existence d’un salaire minimum situé au-dessus du salaire d’équilibre du marché fait que l’offre de travail, émanant des travailleurs augmente car plus de personnes sont incitées à la reprise d’une activité alors que la demande de travail émanant des entreprises diminuent car les salariés coûtent plus chers à embaucher. Le salaire minimum serait donc responsable d’un chômage involontaire (l’offre est supérieure à la demande) et structurel, lié à la structure du marché du travail. Mais pour d’autres comme Keynes, les marchés du travail et des biens et services sont interdépendants : le niveau de l’emploi dépend de la demande de biens et services. Pour résoudre le chômage, il faudrait donc, pour Keynes, relancer l’économie, c'est-à-dire relancer la demande. Pour lui, seul l’Etat peut suppléer la faiblesse de la demande en relançant la consommation et l’investissement par des politiques de relance budgétaire et monétaire. En effet, dans les faits, l’Etat réglemente le marché du travail et intervient par des dépenses publiques ou des baisses de prélèvements obligatoires en faveur de l’emploi. On parle ici de politiques de lutte contre le chômage ou de politiques publiques en faveur de l’emploi. L’objectif du gouvernement avec ces politiques publiques est bien évidemment de favoriser l’emploi mais plus généralement de soutenir la demande et la croissance économique du pays car finalement lutter contre le chômage revient à préserver l’économie du pays. Toutefois, le budget de l’État n’est pas illimité et le gouvernement doit trouver un équilibre entre dépenses publiques et résultats désirés. L’important est de préserver la bonne santé des finances publiques tout en entraînant le pays dans une perspective de croissance et d’emploi. L’enjeu est d’autant plus problématique aujourd’hui quand on remarque que justement la santé des finances publiques n’est pas au beau fixe : le déficit public de la France ne cesse de se creuser en même temps que la dette augmente. Il est donc intéressant de se demander en quoi la gestion des politiques publiques de lutte contre le chômage peuvent-elles avoir un impact sur l’efficience des politiques publiques ? La réponse n’est pas uniforme et les conséquences tirées de ces politiques sont discutables. 
`
