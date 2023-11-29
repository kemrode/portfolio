import React from "react";
import Header from "../components/Header/Header";
import AboutMeView from "../components/AboutMe/AboutMeView";

import '../style/Page/__aboutmeController.scss';
import Footer from "../components/Footer/Footer";
import TabBar from "../components/Footer/TabBar";

export default function AboutMe() {
    return (
        <div className="col completeBlock">
            <Header />
            <AboutMeView />
            <Footer />
            <TabBar />
        </div>
    );
}