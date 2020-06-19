import React, { useState } from "react";

export default function Cell(props) {
    const [i, setI] = useState(props.i);
    const [j, setJ] = useState(props.j);
    const changePlayer = props.changePlayer;
    const [player, setPlayer] = useState(0);

    const setColor = () => {
        if (player === 0) return "white";
        if (player === 1) return "blue";
        return "red";
    };

    const cellStyle = {
        background: setColor(),
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        borderColor: "black",
        outline: "none",
    };

    return (
        <button
            style={cellStyle}
            onClick={() => {
                setPlayer(1);
                changePlayer();
            }}
        ></button>
    );
}
