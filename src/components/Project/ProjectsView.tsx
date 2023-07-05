import React from "react";
import ProjectCell from "./ProjectCell";

export type ProjectType = {
    title: string;
    explanation: string;
    imgName: string;
    link: string;
    status: string;
}

export default function ProjectsView() {

    const littleBot: ProjectType = {
        title: "Littlebot",
        explanation: "Video game coded to delivery a school report for ending of a two years degree as a programmer. The character is a litte robot which have the mission to collect five books and twenty-five golden coins before the time running out. Made with Unity3D and C#.",
        imgName: "iconeLittlebot.png",
        link: "https://github.com/kemrode/littleBot",
        status: "Finish"
    }

    const knowYourCodeGod: ProjectType = {
        title: "DI20 Know your Code God",
        explanation: "My first autonomious iOS application project. Coded for a demonstration at school, it is a quizz game entirely programms with Swift, Apple language, with differents graphics elements with a random management to discover who is who behind the little description.",
        imgName: "test.jpg",
        link: "https://github.com/kemrode/DI20_know_your_code_god",
        status: "Finish"
    }

    const runnerThree: ProjectType = {
        title: "Runner 3",
        explanation: "During my apprentice pathway for Unity, I have to do an exercise which be a runner game where your character is running and differents obstacles appear, your task is to jump over them or, if you touch them, the game is over.",
        imgName: "test.jpg",
        link: "https://github.com/kemrode/prototypeRunner3",
        status: "In Progress"
    }

    const allProjects: ProjectType[] = [littleBot, knowYourCodeGod, runnerThree];

    return (
        <div className="colSimply fsc scrollBlock">
            <div className="col seventyFiveWidth seventyFiveHeight fsc">
                {allProjects && allProjects.map((project, index) => <ProjectCell project={project} />)}
            </div>
        </div>
    );
}