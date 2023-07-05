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

    const unity: Skill = {
        title: "Unity 3D"
    }
    const blender: Skill = {
        title: "Blender"
    }
    const swift: Skill = {
        title: "Swift"
    }
    const csharp: Skill = {
        title: "C#"
    }
    const preventRisk: Skill = {
        title: 'Prevent a risk'
    }
    const conduct: Skill = {
        title: "Conduct a mission, reach an objectiv"
    }


    const planification: Skill = {
        title: "Make a roadmap"
    }
    const specifications: Skill = {
        title: "Write specifications"
    }
    const scrum: Skill = {
        title: "SCRUM"
    }
    const analysis: Skill = {
        title: "analyze technical problems"
    }
    const logistics: Skill = {
        title: "Logitics management"
    }
    const algo: Skill = {
        title: "algorithmic"
    }

    const allSkills: Skill[] = [unity, blender, swift, csharp, preventRisk, conduct];
    const softSkills: Skill[] = [planification, specifications, scrum, analysis, logistics, algo];

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <SkillsView skills={allSkills} softSkills={softSkills} />
        </div>
    );
}