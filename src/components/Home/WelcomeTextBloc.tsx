import React, { useEffect, useState } from "react";
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
        <div className="colSimply completeBlock topCenter">
            <p className="sevenHundredAndSixtyHeightPXWidth presentationTitle">{welcomeTitle}</p>
            <br></br>
            <p className="sevenHundredAndSixtyHeightPXWidth presentationText">{presentationText}</p>
        </div>
    )
}