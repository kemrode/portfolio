import React from "react";
import Header from "../components/Header/Header";
import SkillsView from "../components/Skills/SkillsView";
import '../style/Page/__skillsController.scss';

export type Skill = {
    title: string;
}

export default function SkillsController() {

    const testSkill: Skill = {
        title: "beau gosse"
    }

    const allSkills: Skill[] = [testSkill];

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <SkillsView skills={allSkills} />
        </div>
    );
}