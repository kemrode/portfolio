import React, { useEffect, useState } from "react";
import '../../style/Composants/__welcomeTextBloc.scss';
import { Language } from "../../helpers/languages";
import { French } from "../../helpers/french";

export function WelcomeTextBloc() {

    const [language, setLanguage] = useState<Language>();
    const welcomeTitle = language?.welcome;
    const presentationText = language?.presentation;

    useEffect(() => {
        setLanguage(French());
    }, []);

    return (
        <div className="textBloc">
            <div className="titleExplanation">
                <p className="welcomeTextTitle">{welcomeTitle}</p>
            </div>
            <br></br>
            <div className="textExplanation">
                <p className="welcomeText">{presentationText}</p>
            </div>
        </div>
    )
}