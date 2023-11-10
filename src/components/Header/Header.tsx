import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../style/Layout/__headerLayout.scss';
import { French } from "../../helpers/french";
import { Language } from "../../helpers/languages";
import { ReactComponent as Home } from '../../assets/images/icons/home.svg';

export default function Header() {

    const [langue, setLangue] = useState<Language>();

    useEffect(() => {
        setLangue(French());
    }, [])

    return (
        <div className="header">
            <div className="mobileHeader">
                <Link to="/" className="homeIcon">
                    <Home />
                </Link>
                <div className="nameLabel">
                    <p className="name">{langue?.devName}</p>
                </div>
            </div>
            <div className="navIcons">
                <div className="colSimply centerFlexStart titleHeader fiftyWidth">
                    <Link className="titleLabel" to='/'>{langue?.devName} - {langue?.job}</Link>
                </div>
                <div className="row spaceAroundLine fiftyWidth paddingRightTwentyFive">
                    <div className="icon">
                        <Link className="link" to='/'>{langue?.blog}</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='/skills'>{langue?.skills}</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='/projects'>{langue?.projects}</Link>
                    </div>
                    <div className="icon">
                        <Link className="link" to='/aboutme'>{langue?.aboutMe}</Link>
                    </div>
                </div>
            </div>
            <div className="centerLine"><div className="line purple"></div></div>
        </div>
    )
}