import React from "react";
import '../../style/Layout/__whoAmIView.scss';

export default function WhoAmIView() {

    const title: string = "Qui suis-je, me demandez-vous ?";
    const resumee: string = "Mon résumé professionnel plus détaillé";

    return (
        <div className="whoAmIView">
            <p className="whoAmIView__title">{title}</p>
            <div className="divider" />
            <div className="whoAmIView__resumee">
                <p className="whoAmIView__resumee--resume">{resumee}</p>
            </div>
        </div>
    )
}