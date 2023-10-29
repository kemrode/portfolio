import React, { ReactComponentElement, useState } from "react";

import { ReactComponent as Swift } from '../../assets/images/icons/icons8-swift.svg';
import { ReactComponent as Unity } from "../../assets/images/icons/icons8-unity.svg";
import { ReactComponent as Blender } from '../../assets/images/icons/icons8-blender-3d.svg';
import { ReactComponent as WebTechno } from '../../assets/images/icons/technoWeb.svg';
import { ReactComponent as Csharp } from '../../assets/images/icons/icons8-c.svg';

import decorationImage from '../../assets/images/coding.jpg';
import { French } from "../../helpers/french";
import { WelcomeTextBloc } from "./WelcomeTextBloc";
import { RoundedImage } from "../RoundedImage/RoundedImage";

export default function HomeView() {

    const presentation: string = French().presentation;
    const welcomeTitle: string = French().welcome;
    const [data, setData] = useState([
        <Swift className="icon-75" />,
        <Unity className="icon-75" />,
        <Blender className="icon-75" />,
        <WebTechno className="icon-75" />,
        <Csharp className="icon-75" />
    ]);

    return (
        <div className="spaceAroundRow completeBlock">
            <div className="col sixtyWidth">
                <div className="colSimply seventyFiveHeight completeLine center">
                    <div className="col seventyFiveWidth seventyHeight">
                        <img className="imageRate" src={decorationImage} />
                    </div>
                </div>
                <WelcomeTextBloc />
            </div>
            <div className="col fortyWidth seventyFiveHeight">
                <div className="row completeLine center fiftyHeight">
                    <RoundedImage />
                </div>
                <div className="row completeLine thirtyHeight spaceAroundLine">
                    {data.map(element => <div>{element}</div>)}
                </div>
            </div>
        </div>
    );
}