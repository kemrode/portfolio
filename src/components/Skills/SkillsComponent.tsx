import React from "react";
import '../../style/Composants/__skillsComponent.scss';
import SkillDisplaying from "./SkillDisplaying";
import { Skill } from "../../Model/SkillModel";

export default function SkillsComponent(props: { skills: Skill[], title: string, color: string }) {

    const title: string = props.title;
    const skillsToDisplay: Skill[] = props.skills;
    const colorSkill: string = props.color;

    return (
        <div className="SkillColumn">
            <div className="SkillTitle">
                <p className="title">{title}</p>
            </div>
            <div className="skillDisplayingColumn">
                {skillsToDisplay && skillsToDisplay.map((skill, index) => <SkillDisplaying skillToDisplay={skill.title} color={colorSkill} />)}
            </div>
        </div>
    )
}