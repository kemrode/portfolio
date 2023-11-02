import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../style/Layout/__headerLayout.scss';
import { French } from "../../helpers/french";
import { Language } from "../../helpers/languages";

export default function Header() {

    const [langue, setLangue] = useState<Language>();

    useEffect(() => {
        setLangue(French());
    }, [])

    return (
        <div className="col hundred whitebg">
            <div className="row seventyFiveHeight spaceAroundLine completeLine">
                <div className="colSimply centerFlexStart titleHeader fiftyWidth">
                    <Link className="titleLabel" to='/'>{langue?.devName}</Link>
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