import React from "react";
import { Link } from 'react-router-dom';
import '../../style/Layout/__headerLayout.scss';

export default function Header() {

    const name: string = 'Kevin FICHOU - Développeur iOS'

    return (
        <div className="col hundred whitebg">
            <div className="row seventyFiveHeight spaceAroundLine completeLine">
                <div className="colSimply centerFlexStart titleHeader seventyFiveWidth">
                    <p className="titleLabel">{name}</p>
                </div>
                <div className="row spaceAroundLine thirtyWidth paddingRightTwentyFive">
                    <div className="icon">
                        <Link className="link" to='/'>HOME</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='/'>ABOUT ME</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='/'>SKILLS</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='projetcts'>PROJECTS</Link>
                    </div>
                </div>
            </div>
            <div className="centerLine"><div className="line purple"></div></div>
        </div>
    )
}