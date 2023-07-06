import React from "react";
import profil from '../../assets/images/profil.jpg';
import HobbyView from "./HobbyView";


export default function AboutMeView() {

    const name: string = "Kevin FICHOU";
    const adress: string = "Grainville-sur-ry, 76116";
    const phone: string = "0635158379";
    const email: string = "kevinfichou@gmail.com"
    const linkedin: string = "mon profil Likedin";
    const personalDescription: string = "I'm an iOS mobile apps developper and Video Game creator using Unity3D and programming in C#.\nPreviously, I was a petty officer in the French Navy, and my job was to know everything about the electronical detections. Now, I code apps for iPhones and create little video games as a hobby.\n I really enjoy to play wargames and creates fantasy and SF univers, as I already wrote 2 novels and several shorts novels.\nPleased to see you here, and I'm ready to answer to all of your questions."

    const hobbiesArray: string[] = ["Wargames", "scale models", "video games", "SF and Fantasy readings", "History", "Create Video Games", "Writing novels", "Boxe"]

    return (
        <div className="colSimply completeLine fullHeight sa-cent scrollBlock">
            <div className="row seventyFiveWidth fiftyHeight fsc">
                <div className="row fiftyWidth fullHeight center">
                    <img className="roundedImage shad-bor-purple" src={profil} alt="profil picture of Kevin FICHOU" />
                </div>
                <div className="colSimply centerFlexStart fullHeight fiftyWidth">
                    <p className="subTitBdDkBl">{name}</p>
                    <p className="subTitBdDkBl">{adress}</p>
                    <p className="subTitBdDkBl">{phone}</p>
                    <p className="subTitBdDkBl">{email}</p>
                    <a href="https://www.linkedin.com/in/kevin-fichou-177328172/"><p className="subTitBdDkBl">{linkedin}</p></a>
                </div>
            </div>
            <div className="row seventyFiveWidth twentyFiveHeight center">
                <p className="txt-reg-blue-hover">{personalDescription}</p>
            </div>
            <div className="colSimply ninetyWidth fiftyHeight center">
                <div className="grid-1 completeBlock">
                    {hobbiesArray && hobbiesArray.map((hobby, index) => <HobbyView hobby={hobby} />)}
                </div>
            </div>
        </div>
    );
}