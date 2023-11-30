import React, { useEffect, useState } from "react";
import '../../style/Composants/__aboutMeHobbiesView.scss';
import { Hobbies, Skill } from "../../Model/SkillModel";
import SkillDisplaying from "../Skills/SkillDisplaying";

export default function AboutMeHobbiesView() {

    const [hobbies, setHobbies] = useState<Skill[]>([]);
    const [color, setColor] = useState<string>();
    const title: string = "Mes Loisirs";

    useEffect(() => {
        setHobbies(Hobbies);
        setColor("#5B0AC9");
    }, [])

    return (
        <div className="aboutMeHobbiesView">
            <div className="aboutHobbiesTitle">
                <p>{title}</p>
            </div>
            <div className="aboutHobbiesGrid">
                {hobbies && hobbies.map((skill, index) => <SkillDisplaying skillToDisplay={skill.title} color={color!} />)}
            </div>
        </div>
    )
}