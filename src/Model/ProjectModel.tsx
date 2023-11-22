import React from "react";

export type Project = {
    title: string;
    githubLink: string;
    image: string;
    description: string;
    status: boolean;
}

function AddNewProject(title: string, githubLink: string, image: string, description: string) {

    const newProject: Project = {
        title: title,
        githubLink: githubLink,
        image: image,
        description: description,
        status: false,
    }
    return newProject
}

export const MyProjects = () => {

    const portfolio: Project = AddNewProject("Portfolio", "https://github.com/kemrode/portfolio", "", "Site vitrine portfolio, réalisé en React avec typescript");
    const landmarks: Project = AddNewProject("Landmarks", "https://github.com/kemrode/landmarks", "", "Exercice iOS réalisé avec SwiftUI dans le cadre d'un apprentissage de l'outil SwiftUI");
    const customProgressCircularBar: Project = AddNewProject("Barre de progression", "https://github.com/kemrode/customProgressCircularBar", "", "Travail pour créer une barre de progression circulaire associée à un pourcentage de remplissage d'une liste, de manière dynamique en fonction des actions utilisateur");
    const baloonChallenge: Project = AddNewProject("Challenge du ballon", "https://github.com/kemrode/baloonChallenge", "", "Challenge Unity consistant à réparer et améliorer un projet fournis dans le cadre des cours Junior Programmer Unity, réalisé sous Unity3D avec C#");
    const prototypeRunner: Project = AddNewProject("Runner", "https://github.com/kemrode/prototypeRunner3", "", "Petit jeu de type Runner, réalisé avec le cours Unity Junior Programmer. Utilisation d'Unity3D et C# pour réaliser le jeu");
    const challengeTwo: Project = AddNewProject("Challenge Junior Programmer", "https://github.com/kemrode/Prototype_2", "", "Challenge Unity dans le cadre du cours Unity Junior Programmer. Utilisation d'Unity3D et C# pour réaliser le jeu");
    const noelList: Project = AddNewProject("Liste de Noël", "https://github.com/kemrode/shoppingList", "", "Application en TypeScript dans le cadre de la découverte de TS lors d'une formation au CESI");
    const myresumee: Project = AddNewProject("Mon CV", "https://github.com/kemrode/myresumee", "", "Application reprenant mon CV sous la forme d'une application mobile native, écrite en SWIFT");
    const monTerroirMobile: Project = AddNewProject("Mon Terroir - mobile", "https://github.com/kemrode/MonTerroirMobile", "", "Application en React Native réalisée dans le cadre d'un challenge CESI. Première application mobile que j'ai réalisé en React Native avec Typescript aussi importante, d'après des maquettes que j'ai réalisé avec Figma");
    const lapoulette: Project = AddNewProject("La Poulette", "https://github.com/kemrode/laPoulette", "", "Petit exercice Swift depuis un cours sur Udemy pour apprendre à maîtriser la manière d'interagir dynamiquement avec les éléments affichés à l'écran.");
    const reactLesson: Project = AddNewProject("Leçon CESI React", "https://github.com/kemrode/react_lesson", "", "Exercice de découverte de React dans le cadre d'un cours reçu au CESI de Rouen. Premiers pas avec React");
    const LoftCube: Project = AddNewProject("Loftcube", "https://github.com/kemrode/LoftCube", "", "Challenge CESI en groupe.");
    const littleBot: Project = AddNewProject("Scanno", "https://github.com/kemrode/littleBot", "", "Dans l'optique d'envoyer mon rapport de fin de formation Bac+2 au CESI, j'ai réalisé un petit jeu mettant en scène un petit robot envoyé faire des courses (lien avec l'entreprise m'employant à l'époque). Les personnages et une majorité des items ont été réalisés sous Blender par moi-même.");
    const superCesi: Project = AddNewProject("SuperCesi", "https://github.com/kemrode/superCesi", "", "Exercice JAVA réalisé dans le cadre du CESI et de la découverte du langage.");
    const annuaireCesi: Project = AddNewProject("Annuaire CESI", "https://github.com/kemrode/annuaireCESI", "", "Exercice C# réalisé dans le cadre du CESI. API réalisé en plus pour améliorer mon projet de base. Code konami caché dedans ;)");
    const annuaireCesiWPF: Project = AddNewProject("Annuaire CESI WPF", "https://github.com/kemrode/annuCESIWPF", "", "Exercice C# réalisé dans le cadre du CESI. Projet en WPF d'un annuaire permettant d'effectuer des recherches et un CRUD basique vers l'API annuaireCESI.");
    const webDionysos: Project = AddNewProject("webDionysos", "https://github.com/kemrode/webDionysos", "", "Challenge CESI en C# réalisé en groupe.");
    const diGod: Project = AddNewProject("DI20 les dieux", "https://github.com/kemrode/DI20_know_your_code_god", "", "Ma première application développé en solo avec Swift. Dans le cadre d'une présentation sur une journée d'une technologie, j'avais choisi de faire une application Swift de jeu pour un Qui-est-ce personnalisé.");
    const ocReactnative: Project = AddNewProject("Exercice RN openClassrooms", "https://github.com/kemrode/openClassReactNativLesson", "", "Exercice OpenClassrooms sur react native, premiers pas avec React native.");
    const udemySwiftPostInstagram: Project = AddNewProject("Exercice Udemy Swift", "https://github.com/kemrode/udemySwiftPostIntagramExercise", "", "Exercice Udemy pour l'apprentissage de Swift consistant à recréer le visuel d'une page Instagram (sans interaction).");
    const laby: Project = AddNewProject("Labyrinthe", "https://github.com/kemrode/Labyrinthe", "", "Jeu développé suivant un cours Udemy sur le moteur Unity3D. Premiers pas avec Unity3D et C#.");

    return [portfolio, landmarks, customProgressCircularBar, baloonChallenge, prototypeRunner, challengeTwo, noelList, myresumee, monTerroirMobile, lapoulette, reactLesson, LoftCube, littleBot, superCesi, annuaireCesi, annuaireCesiWPF, webDionysos, diGod, ocReactnative, udemySwiftPostInstagram, laby];
}