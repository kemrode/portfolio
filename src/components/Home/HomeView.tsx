import React from "react";
import { ReactComponent as SwiftLogo } from '../../assets/images/swift.svg';
import { ReactComponent as UnityLogo } from '../../assets/images/unity.svg';
import { ReactComponent as BlenderLogo } from '../../assets/images/blender.svg';
import { ReactComponent as WebTechnologiesLogo } from '../../assets/images/technoWeb.svg';
import { ReactComponent as CsharpLogo } from '../../assets/images/csharp.svg';

export default function HomeView() {

    const presentation: string = "Hi ! I’m Kevin, an iOS and Unity programmer.Previously, I served as a petty officer in the French Navy, but I now, I code the futur of your applications and make fun with small video games. It’s a pleasure to see you :)";

    return (
        <div className="spaceAroundRow completeBlock">
            <div className="col sixtyWidth">
                <div className="colSimply seventyFiveHeight completeLine center">
                    <div className="col seventyFiveHeight seventyHeight">
                        <img className="imageRate testRed twentyFiveWidth twentyFiveHeight" src='../../src/assets/images/coding.jpg' />
                    </div>
                </div>
                <div className="row completeLine thirtyHeight">
                    <SwiftLogo className="twentyFiveWidth twentyFiveHeight" />
                    <UnityLogo className="twentyFiveWidth twentyFiveHeight" />
                    <CsharpLogo className="twentyFiveWidth twentyFiveHeight" />
                    <BlenderLogo className="twentyFiveWidth twentyFiveHeight" />
                    <WebTechnologiesLogo className="twentyFiveWidth twentyFiveHeight" />
                </div>
            </div>
            <div className="col fortyWidth seventyFiveHeight">
                <div className="colSimply completeLine thirtyHeight center twentyFiveWidth twentyFiveHeight">
                    <img src="../../assets/images/coding.jpg" />
                </div>
                <div className="colSimply completeLine seventyFiveHeight topCenter">
                    <p className="seventyFiveWidth ">{presentation}</p>
                </div>
            </div>
        </div>
    );
}