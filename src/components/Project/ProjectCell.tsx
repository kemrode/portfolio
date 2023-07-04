import React from "react";
import '../../style/Layout/__cellLayout.scss';
import { ProjectType } from "./ProjectsView";

export default function ProjectCell(props: { project: ProjectType }) {

    const projectToDisplay: ProjectType = props.project;
    return (
        <div className="cellLayout mtfftpx">
            <div className="colSimply twentyFiveWidth fullHeight imageRef">
                <img src="" />
            </div>
            <div className="colSimply seventyFiveWidth">
                <div className="row center twentyHeight">
                    <p className="title">{projectToDisplay.title}</p>
                </div>
                <div className="colSimply topCenter completeLine seventyHeight">
                    <p className="textRegular sixtyWidth">{projectToDisplay.explanation}</p>
                </div>
                <div className="row completeLine spaceAroundLine">
                    <div><p className="textRegular"><a href={projectToDisplay.link}>{projectToDisplay.link}</a></p></div>
                    <div><p className="status">{projectToDisplay.status}</p></div>
                </div>
            </div>
        </div>
    );
}