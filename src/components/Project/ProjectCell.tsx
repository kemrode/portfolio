import React, { useEffect, useState } from "react";
import '../../style/Layout/__cellLayout.scss';
import { ProjectType } from "./ProjectsView";

export default function ProjectCell(props: { project: ProjectType }) {

    const projectToDisplay: ProjectType = props.project;
    const [status, setStatus] = useState<boolean>();
    const closedProjectColor: string = "#0A85C9";
    const inProgressProjectColor: string = "#A60D0D";

    useEffect(() => {
        const projetcStatus: string = props.project.status;
        if (projetcStatus == "close") {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [])



    return (
        <div className="cellLayout">
            <div className="cellLayout__projectImage">
                <img className="cellLayout__projectImage--image" src={require(`../../assets/images/${projectToDisplay.imgName}`)} />
            </div>
            <div className="cellLayout__textContainer">
                <div className="cellLayout__textContainer--titleBloc">
                    <p>{projectToDisplay.title}</p>
                    <div className="statusPoint" style={status ? { backgroundColor: closedProjectColor } : { backgroundColor: inProgressProjectColor }}></div>
                </div>
                <div className="cellLayout__textContainer--textBloc">
                    <p className="textToDisplay">{projectToDisplay.explanation}</p>
                </div>
                <div className="cellLayout__textContainer--subtextBloc">
                    <div className="projectLink"><p><a href={projectToDisplay.link}>{projectToDisplay.link}</a></p></div>
                    <div className="projectStatus">
                        <p className="status" style={status ? { color: closedProjectColor } : { color: inProgressProjectColor }}>{projectToDisplay.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}