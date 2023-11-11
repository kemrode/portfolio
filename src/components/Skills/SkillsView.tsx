import React from "react";
import SkillsComponent from "./SkillsComponent";
import { Skill } from "../../Model/SkillModel";

export default function SkillsView(props: { hardSkills: Skill[], softSkills: Skill[], technicalSkills: Skill[] }) {

    const hardSkillsTitle: string = "Savoir-Faire";
    const softSkillsTitle: string = "Savoir-Être";
    const technicalSkillsTitle: string = "Technique";
    const hardSkills: Skill[] = props.hardSkills;
    const technicalSkills: Skill[] = props.technicalSkills;
    const softSkills: Skill[] = props.softSkills;

    const hardSkillColor: string = "#2D4B73";
    const softSkillColor: string = "#280BD4";
    const technicalSkillColor: string = "#A60D0D";

    return (
        <div className="mainSkillsView">
            <div className="skillsColumn">
                <SkillsComponent title={technicalSkillsTitle} skills={technicalSkills} color={technicalSkillColor} />
            </div>
            <div className="skillsColumn">
                <SkillsComponent title={hardSkillsTitle} skills={hardSkills} color={hardSkillColor} />
            </div>
            <div className="skillsColumn">
                <SkillsComponent title={softSkillsTitle} skills={softSkills} color={softSkillColor} />
            </div>
        </div>
    );
}