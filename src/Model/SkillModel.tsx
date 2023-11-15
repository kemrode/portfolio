import React from "react";

export type Skill = {
    title: string;
    color: string;
    type: string;
}

enum SkillType {
    Softskill,
    Hardskill,
    TechnicalSkill
}

function AddNewSkill(title: string, type: string) {

    const softskillColor: string = "#";
    const hardskillColor: string = "#";
    const technicalColor: string = "#";

    const newSkill: Skill = {
        title: title ?? "defaultTitle",
        color: "white",
        type: "defaultType"
    }

    switch (type) {
        case "softskill":
            newSkill.title = "Savoir-Être"
            newSkill.color = softskillColor;
            break;
        case "hardskill":
            newSkill.title = "Savoir-Faire"
            newSkill.color = hardskillColor;
            break;
        case "technical":
            newSkill.title = "Technique"
            newSkill.color = technicalColor;
            break;
        default:
            break;
    }
    return newSkill;
}

export const SoftSkills = () => {

    const typeOfSkill: string = SkillType.Softskill.toString();
    const skillOne: Skill = AddNewSkill("Pugnace", typeOfSkill);
    const skillTwo: Skill = AddNewSkill("Créatif", typeOfSkill);
    const skillThree: Skill = AddNewSkill("Volontaire", typeOfSkill);
    const skillFour: Skill = AddNewSkill("Analyser un besoin", typeOfSkill);
    const skillFive: Skill = AddNewSkill("Animer une réunion", typeOfSkill);
    const skillSix: Skill = AddNewSkill("Plannifier", typeOfSkill);
    const skillSeven: Skill = AddNewSkill("", typeOfSkill);
    const skillEight: Skill = AddNewSkill("", typeOfSkill);

    return [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix];
}

export const HardSkills = () => {

    const typeOfSkill: string = SkillType.Hardskill.toString();
    const skillOne: Skill = AddNewSkill("Rédaction", typeOfSkill);
    const skillTwo: Skill = AddNewSkill("Gestion de projet", typeOfSkill);
    const skillThree: Skill = AddNewSkill("Spécifications Fonctionnelles", typeOfSkill);
    const skillFour: Skill = AddNewSkill("SCRUM", typeOfSkill);
    const skillFive: Skill = AddNewSkill("Etablir un cahier des charges", typeOfSkill);
    const skillSix: Skill = AddNewSkill("Algorithmique", typeOfSkill);
    const skillSeven: Skill = AddNewSkill("Réaliser de la documentation technique", typeOfSkill);
    const skillEight: Skill = AddNewSkill("Concevoir une solution logicielle", typeOfSkill);
    const skillNine: Skill = AddNewSkill("Rédiger une STB", typeOfSkill);

    return [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine];
}

export const TechnicalSkills = () => {

    const typeOfSkill: string = SkillType.TechnicalSkill.toString();
    const skillOne: Skill = AddNewSkill("SWIFT", typeOfSkill);
    const skillTwo: Skill = AddNewSkill("Obj-C", typeOfSkill);
    const skillThree: Skill = AddNewSkill("React", typeOfSkill);
    const skillFour: Skill = AddNewSkill("React-Native", typeOfSkill);
    const skillFive: Skill = AddNewSkill("C#", typeOfSkill);
    const skillSix: Skill = AddNewSkill("Blender", typeOfSkill);
    const skillSeven: Skill = AddNewSkill("Unity3D", typeOfSkill);
    const skillEight: Skill = AddNewSkill("SQL", typeOfSkill);
    const skillNine: Skill = AddNewSkill("Figma", typeOfSkill);

    return [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine];
}