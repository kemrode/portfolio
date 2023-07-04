import React from "react";
import Header from "../components/Header/Header";
import ProjectsView from "../components/Project/ProjectsView";
import '../style/Layout/__projectsView.scss';

export default function ProjectsController() {

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <ProjectsView />
        </div>
    );
}