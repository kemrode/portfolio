import React from "react";
import Header from "../components/Header/Header";
import AboutMeView from "../components/AboutMe/AboutMeView";

import '../style/Page/__aboutmeController.scss';

export default function AboutMe() {
    return (
        <div className="col completeBlock">
            <Header />
            <AboutMeView />
        </div>
    );
}