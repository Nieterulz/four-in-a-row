import React, { useState } from "react";
import Cell from "./Cell";

const board = {
    background: "#d1410d",
    display: "block",
    margin: "auto",
    width: "531px",
    border: "solid black 3px",
    // borderRadius: "3%",
};

const rows = [1, 2, 3, 4, 5, 6];
const cols = [1, 2, 3, 4, 5, 6, 7];

export default function Fourinarow(props) {
    const [player, setPlayer] = useState(1);

    const changePlayer = () => {
        setPlayer(player === 1 ? 2 : 1);
    };

    const cells = rows.map((i) =>
        cols.map((j) => (
            <Cell
                key={i.toString() + j.toString()}
                i={i}
                j={j}
                changePlayer={changePlayer}
            ></Cell>
        ))
    );
    console.log("renderizado de nuevo");

    return <div style={board}>{cells}</div>;
}
