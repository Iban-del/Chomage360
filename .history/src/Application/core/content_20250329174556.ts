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
//def
export const publicFinances = "Ensemble des charges et des ressources de l'État ou d'une collectivité territoriale, ainsi que l'ensemble des règles et des mécanismes économiques et politiques qui leur sont applicables. Le but des finances publiques est de dégager les recettes nécessaires pour couvrir les dépenses, préalablement déterminées.";

export const unemployment = "Le chômage représente l'ensemble des personnes de 15 ans et plus, privées d'emploi et en recherchent un activement, (INSEE).";

export const unemploymentPolicies = "Les politiques de l'emploi sont l’ensemble des mesures mises en œuvre par les administrations publiques dans le but d’accroître l'emploi (augmentation du taux d'emploi de la population en âge de travailler) et de réduire le chômage (recherche du 'plein-emploi').";

export const efficiency = "Capacité de rendement, efficacité. Rapport entre résultats obtenus et ressources utilisées.";

export const keynesianPolicy = "Pour embaucher, les entreprises ont besoin de vendre, il faut un environnement où elles sont sûres de vendre afin de lancer la production, embaucher et donc réduire le chômage, offrir du pouvoir d’achat à ses salariés et ainsi augmenter la croissance économique du pays. Pour mettre les entreprises dans cet environnement de hausse de la demande globale, le gouvernement peut mettre en place des politiques publiques : des politiques budgétaires expansives qui consistent à diminuer les recettes budgétaires afin de laisser plus de revenu disponible aux ménages et ainsi augmenter la consommation et donc la production et la demande. Et d’autre part, l’État peut lancer des politiques monétaires qui auront des influences sur le taux d’intérêts, le taux d’emprunt et qui inciteront, si ce taux est revu à la baisse, à investir et emprunter de l’argent car pendant cette période, emprunter de l’argent coûtera moins cher : l’État incite les individus à consommer.";

export const laborCostReductionPolicy = "Un autre moyen pour inciter les entreprises à embaucher, c’est de réduire le coût du travail pour les employeurs. Bien souvent, les entreprises refusent d’embaucher car le coût d’un travailleur est très élevé du fait des cotisations sociales et autres contributions. De fait, pour favoriser le plein emploi, l’État va exonérer les entreprises de certaines taxes afin de baisser le coût du travailleur et inciter à embaucher. Cette politique d’allègement du coût du travail permet de réduire le chômage et s’inscrit dans l’objectif de plein emploi de l’Élysée.";

export const trainingAndFlexibilizationPolicy = "Le développement de la formation des actifs peu qualifiés accroît leur poly­valence et les rend plus employables. Un système de formation adapté permet une meilleure adéquation entre l’offre et la demande de travail et réduit la composante structurelle du chômage. La flexibilisation du marché du travail englobe les mesures permettant l’adaptation de l’offre de travail et de la demande de travail aux besoins des entreprises. Les pouvoirs publics cherchent à diminuer les rigidités institutionnelles, sources de chômage structurel. Assouplir les règles de licenciement, faciliter le recours aux emplois précaires (intérim, contrat à durée déterminée…), rendre possible l’adaptation de la durée du travail aux fluctuations de l’activité économique (heures supplémentaires, temps partiel…) sont des mesures possibles. Ces mesures, en permettant aux entreprises d’adapter leurs coûts salariaux à leur environnement économique, doivent faciliter la création d’emplois.";

export const positiveEffect = "Les mesures visant à lutter contre le chômage influent de manière importante sur les finances publiques et jouent, par conséquent, un rôle sur la croissance économique du pays. Celles-ci peuvent diminuer les coûts sociaux associés aux allocations de chômage, augmenter les revenus fiscaux par le biais de l'emploi et réduire les dépenses sociales sur le long terme. Bien que certaines mesures peuvent engendrer des coûts préliminaires, elles ont pour effet de diminuer les déficits et d'assurer une stabilité financière à long terme. 

En effet, les politiques de lutte contre le chômage vont permettre de réduire les dépenses publiques qui sont liées aux allocations chômage, car si le nombre de chômeurs diminue, le nombre d’aides alloués pour ces derniers diminue également. Ainsi, cela peut présenter un avantage pour l’Etat, puisque ces économies de dépenses pourront servir à attribuer des ressources supplémentaires qui pourraient potentiellement servir à équilibrer d’autres secteurs qui se trouvent en difficultés en termes de financement.

De même, si on constate une réduction du chômage, qui peut être expliquée par une politique dite de “relance de l’emploi”, cela va s’accompagner d’une augmentation des recettes fiscales pour l’Etat. En effet, lorsqu'une plus grande proportion de la population travaille, le gouvernement reçoit plus de revenus fiscaux sous forme d'impôts sur le revenu et de cotisations sociales. De plus, cela va permettre de réduire les aides et de faire des économies sur les dépenses sociales. Pour se faire, l’Etat va parfois devoir investir au début, en mettant par exemple en place des investissements dans des dispositifs de formation et d’accompagnement des chômeurs pour qu’ils puissent se remettre dans une dynamique de réinsertion dans le marché de l’emploi. Ainsi, sur le long terme, cela participera à réduire les dépenses de l’Etat.
" 