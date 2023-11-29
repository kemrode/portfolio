import React from "react";

export function RoundedImage() {

    const profilPicture = require('../../assets/images/profil.jpg');

    return (
        <div className="imageBox">
            <img className="roundedImage" src={profilPicture} />
        </div>
    )
}