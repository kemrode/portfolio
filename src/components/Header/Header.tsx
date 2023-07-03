import React from "react";
import { Link } from 'react-router-dom';
import '../../style/Layout/__headerLayout.scss';

export default function Header() {

    return (
        <div className="col hundred">
            <div className="row">
                <div className="titleHeader">
                    <p className="titleLabel">Kevin FICHOU</p>
                </div>
                <div className="row">
                    <div>
                        <Link to='/'>HOME</Link>
                    </div>
                    <div>
                        <Link to='/'>ABOUT ME</Link>
                    </div>
                    <div>
                        <Link to='/'>PROJECTS</Link>
                    </div>
                    <div>
                        <Link to='/'>SKILLS</Link>
                    </div>
                </div>
            </div>
            <div className="line purple"></div>
        </div>
    )
}