import React from "react";

export default function HobbyView(props: { hobby: string }) {

    const hobby: string = props.hobby;

    return (
        <div className="row cell-rd-bd-purple-hover cellFxW-270 cellFxH-50 center">
            <p className="txt-reg-dkbl-bold">{hobby}</p>
        </div>
    )
}