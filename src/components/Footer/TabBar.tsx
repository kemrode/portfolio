import React from "react";
import '../../style/Layout/__tabBarLayout.scss';
//SVG import
import { ReactComponent as Information } from '../../assets/images/icons/information.svg';
import { Link } from "react-router-dom";

export default function TabBar() {

    //Properties
    const blogIcon = require('../../assets/images/icons/blog50.png');
    const skillsIcon = require('../../assets/images/icons/skills50.png');
    const devIcon = require('../../assets/images/icons/develop80.png');

    //Return View
    return (
        <div className="tabBar">
            <div className="tabItem">
                <Link to="/">
                    <img src={blogIcon} />
                </Link>
            </div>
            <div className="tabItem">
                <Link to="/skills">
                    <img src={skillsIcon} />
                </Link>
            </div>
            <div className="tabItem">
                <Link to="/projects">
                    <img src={devIcon} />
                </Link>
            </div>
            <div className="tabItem">
                <Link to="/aboutme">
                    <Information />
                </Link>
            </div>
        </div>
    )
}