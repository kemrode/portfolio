import React from "react";

import { ReactComponent as Swift } from '../../assets/images/icons/icons8-swift.svg';
import { ReactComponent as Unity } from "../../assets/images/icons/icons8-unity.svg";
import { ReactComponent as Blender } from '../../assets/images/icons/icons8-blender-3d.svg';
import { ReactComponent as WebTechno } from '../../assets/images/icons/technoWeb.svg';
import { ReactComponent as Csharp } from '../../assets/images/icons/icons8-c.svg';

import decorationImage from '../../assets/images/coding.jpg';
import profil from '../../assets/images/profil.jpg';

export default function HomeView() {

    const presentation: string = "Hi ! I’m Kevin, an iOS and Unity programmer.Previously, I served as a petty officer in the French Navy, but I now, I code the futur of your applications and make fun with small video games. It’s a pleasure to see you :)\nI discover to program three years ago and since, I work my skills of Swift, C# and Unity3D.";

    return (
        <div className="spaceAroundRow completeBlock">
            <div className="col sixtyWidth">
                <div className="colSimply seventyFiveHeight completeLine center">
                    <div className="col seventyFiveWidth seventyHeight">
                        <img className="imageRate" src={decorationImage} />
                    </div>
                </div>
                <div className="row completeLine thirtyHeight spaceAroundLine">
                    <Swift className="icon-75" />
                    <Unity className="icon-75" />
                    <Blender className="icon-75" />
                    <WebTechno className="icon-75" />
                    <Csharp className="icon-75" />
                </div>
            </div>
            <div className="col fortyWidth seventyFiveHeight">
                <div className="colSimply completeLine fiftyHeight center twentyFiveWidth">
                    <img className="roundedImage" src={profil} />
                </div>
                <div className="colSimply completeLine fiftyHeight topCenter">
                    <p className="seventyFiveWidth presentationText">{presentation}</p>
                </div>
            </div>
        </div>
    );
}