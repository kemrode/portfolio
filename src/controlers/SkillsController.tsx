import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SkillsView from "../components/Skills/SkillsView";
import '../style/Page/__skillsController.scss';
import TabBar from "../components/Footer/TabBar";
import Footer from "../components/Footer/Footer";
import { HardSkills, Skill, SoftSkills, TechnicalSkills } from "../Model/SkillModel";


export default function SkillsController() {

    const [hardSkills, setHardSkills] = useState<Skill[]>([]);
    const [softSkills, setSoftSkills] = useState<Skill[]>([]);
    const [technicalSkills, setTechnicalSkills] = useState<Skill[]>([]);

    useEffect(() => {
        setHardSkills(HardSkills);
        setSoftSkills(SoftSkills);
        setTechnicalSkills(TechnicalSkills);
    }, [])

    return (
        <div className="whiteBackground col homeControllerBlock">
            <Header />
            <SkillsView hardSkills={hardSkills} softSkills={softSkills} technicalSkills={technicalSkills} />
            <Footer />
            <TabBar />
        </div>
    );
}