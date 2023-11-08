import React from "react";
import Header from "../components/Header/Header";
import '../style/Page/__homeController.scss';
import HomeView from "../components/Home/HomeView";
import Footer from "../components/Footer/Footer";
import TabBar from "../components/Footer/TabBar";

export default function HomeController() {

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <HomeView />
            <Footer />
            <TabBar />
        </div>
    )
}