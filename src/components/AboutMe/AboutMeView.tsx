import React from "react";
import profil from '../../assets/images/profil.jpg';
import HobbyView from "./HobbyView";
import AboutMePhoto from "./AboutMePhoto";
import Footer from "../Footer/Footer";
import WhoAmIView from "./WhoAmIView";
import '../../style/Layout/__aboutMeView.scss';
import AboutMeHobbiesView from "./AboutMeHobbiesView";


export default function AboutMeView() {

    const name: string = "Kevin FICHOU";
    const adress: string = "Grainville-sur-ry, 76116";
    const phone: string = "0635158379";
    const email: string = "kevinfichou@gmail.com"
    const linkedin: string = "mon profil Likedin";
    const personalDescription: string = "I'm an iOS mobile apps developper and Video Game creator using Unity3D and programming in C#.\nPreviously, I was a petty officer in the French Navy, and my job was to know everything about the electronical detections. Now, I code apps for iPhones and create little video games as a hobby.\n I really enjoy to play wargames and creates fantasy and SF univers, as I already wrote 2 novels and several shorts novels.\nPleased to see you here, and I'm ready to answer to all of your questions."

    const hobbiesArray: string[] = ["Wargames", "scale models", "video games", "SF and Fantasy readings", "History", "Create Video Games", "Writing novels", "Boxe"]

    return (
        <div className="aboutMeView">
            <AboutMePhoto />
            <div className="aboutMeView__resumeAndHobbies">
                <WhoAmIView />
                <AboutMeHobbiesView />
            </div>
        </div>
    );
}