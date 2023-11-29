import React from "react";
import '../../style/Layout/__projectView.scss';
import ProjectCell from "./ProjectCell";
import { projectParagraph } from "../../assets/infos/infoText";
import { MyProjects, Project } from "../../Model/ProjectModel";

export default function ProjectsView() {

    const para: string = projectParagraph();

    const allProjects: Project[] = MyProjects();

    return (
        <div className="projectView">
            <div className="textContainer">
                <div className="textContainer__container">
                    <p>{para}</p>
                </div>
            </div>
            <div className="projectsContainer">
                {allProjects && allProjects.map((project, index) => <ProjectCell project={project} />)}
            </div>
        </div>
    );
}