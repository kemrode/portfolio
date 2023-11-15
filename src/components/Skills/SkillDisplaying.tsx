import React from "react";
import '../../style/Composants/__skill.scss';

export default function SkillDisplaying(props: { skillToDisplay: string, color: string }) {

    const skillToDisplay: string = props.skillToDisplay;

    return (
        <div className="skill">
            <div className="skillColor" style={{ backgroundColor: props.color }} />
            <div className="skillText">
                <p className="skillName">{skillToDisplay}</p>
            </div>
        </div>
    )
}