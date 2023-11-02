import React from "react";
import { Personal, PersonalInformations } from "../../helpers/PersonalInformations";
import { ReactComponent as Malt } from '../../assets/images/icons/malt.svg';
import { ReactComponent as Linkedin } from '../../assets/images/icons/linkedin.svg';
import { ReactComponent as Github } from '../../assets/images/icons/github.svg';

export default function Footer() {

    const personalInformations: Personal = PersonalInformations()
    const phoneImage = require("../../assets/images/icons/phone.png");
    const mailImage = require("../../assets/images/icons/mail.png");

    return (
        <div className="row hundred footer">
            <div className="row fiftyWidth spaceAroundLine">
                <div className="row twentyFiveWidth center">
                    <div className="col fiftyWidth center">
                        <img className="smallImageFooterStyle" src={mailImage} />
                    </div>
                    <div className="col fiftyWidth centerFlexStart">
                        <p className="textBoldWhite">{personalInformations.mailAdress}</p>
                    </div>
                </div>
                <div className="row twentyFiveWidth center">
                    <div className="col fiftyWidth center">
                        <img className="smallImageFooterStyle" src={phoneImage} />
                    </div>
                    <div className="col fiftyWidth centerFlexStart">
                        <p className="textBoldWhite">{personalInformations.phoneNumber}</p>
                    </div>
                </div>
            </div>
            <div className="twentyFiveWidth" />
            <div className="row spaceAroundLine thirtyWidth">
                <div className="col fiftyWidth fiftyHeight center">
                    <Malt />
                </div>
                <div className="col fiftyWidth fiftyHeight center">
                    <Linkedin style={{ fill: 'white' }} />
                </div>
                <div className="col fiftyWidth fiftyHeight center">
                    <Github style={{ fill: 'white' }} />
                </div>
            </div>
        </div>
    );
}