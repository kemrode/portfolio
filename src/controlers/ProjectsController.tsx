import React from "react";
import Header from "../components/Header/Header";
import ProjectsView from "../components/Project/ProjectsView";
import '../style/Layout/__projectsView.scss';
import Footer from "../components/Footer/Footer";
import TabBar from "../components/Footer/TabBar";

export default function ProjectsController() {

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <ProjectsView />
            <Footer />
            <TabBar />
        </div>
    );
}