import React, { useEffect, useState } from "react";
import '../../style/Layout/__cellLayout.scss';
import { Project } from "../../Model/ProjectModel";

export default function ProjectCell(props: { project: Project }) {

    const projectToDisplay: Project = props.project;
    const [status, setStatus] = useState<boolean>();
    const closedProjectColor: string = "#0A85C9";
    const inProgressProjectColor: string = "#A60D0D";

    useEffect(() => { setStatus(props.project.status) }, [])

    return (
        <div className="cellLayout">
            <div className="cellLayout__projectImage">
                <img className="cellLayout__projectImage--image" src={projectToDisplay.image != "" ? require(`../../assets/images/${projectToDisplay.image}`) : ""} />
            </div>
            <div className="cellLayout__textContainer">
                <div className="cellLayout__textContainer--titleBloc">
                    <p>{projectToDisplay.title}</p>
                    <div className="statusPoint" style={status ? { backgroundColor: closedProjectColor } : { backgroundColor: inProgressProjectColor }}></div>
                </div>
                <div className="cellLayout__textContainer--textBloc">
                    <p className="textToDisplay">{projectToDisplay.description}</p>
                </div>
                <div className="cellLayout__textContainer--subtextBloc">
                    <div className="projectLink"><p><a href={projectToDisplay.githubLink}>{projectToDisplay.githubLink}</a></p></div>
                    <div className="projectStatus">
                        <p className="status" style={status ? { color: closedProjectColor } : { color: inProgressProjectColor }}>{projectToDisplay.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}