import React from "react";
import { RoundedImage } from "../RoundedImage/RoundedImage";
import '../../style/Layout/__aboutMePhoto.scss';

export default function AboutMePhoto() {

    const recap: string = "Après une première carrière de dix ans comme officier-marinier dans la Marine Nationale, me voilà devenu analyste-programmeur et travaillant en SWIFT, C# et React entre autre";

    return (
        <div className="aboutMePhoto">
            <RoundedImage />
            <div className="recapDiv">
                <p className="recap">{recap}</p>
            </div>
        </div>
    )
}