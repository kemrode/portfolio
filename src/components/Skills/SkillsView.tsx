import React from "react";
import { Skill } from "../../controlers/SkillsController";

export default function SkillsView(props: { skills: Skill[], softSkills: Skill[] }) {

    const hardSkillsTitle: string = "HardSkill";
    const softSkillsTitle: string = "SoftSkill";
    const skills: Skill[] = props.skills;
    const softSkills: Skill[] = props.softSkills;

    return (
        <div className="row completeBlock">
            <div className="colSimply fsc fullHeight fiftyWidth ">
                <div className="colSimply ninetyHeight seventyFiveWidth mtfftpx fsc">
                    <div className="row twentyHeigth completeLine center"><p className="title">{hardSkillsTitle}</p></div>
                    <div className="colSimply completeLine fullHeight fsc mtfftpx">
                        {skills && skills.map((skill, index) =>
                            <div className="row twentyHeight center ffw">
                                <p className="textRegular">{skill.title}</p>
                            </div>)}
                    </div>
                </div>
            </div>
            <div className="colSimply rb3px"></div>
            <div className="colSimply fsc fullHeight fiftyWidth">
                <div className="colSimply ninetyHeight seventyFiveWidth mtfftpx fsc">
                    <div className="row twentyHeigth completeLine center"><p className="title">{softSkillsTitle}</p></div>
                    <div className="colSimply completeLine fullHeight fsc mtfftpx">
                        {softSkills && softSkills.map((skill, index) =>
                            <div className="row twentyHeight center ffw">
                                <p className="textRegular">{skill.title}</p>
                            </div>)}
                    </div>
                </div>
            </div>

        </div>
    );
}