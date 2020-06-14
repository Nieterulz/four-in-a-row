import React, { Component } from "react";
import Cell from "./Cell";

const board = {
    background: "#d1410d",
    display: "block",
    margin: "auto",
    width: "531px",
    border: "solid black 3px",
    borderRadius: "3%",
};

const rows = [1, 2, 3, 4, 5, 6];
const cols = [1, 2, 3, 4, 5, 6, 7];

export default class Fourinarow extends Component {
    static state = {
        player: 1,
    };

    changePlayer() {
        this.setState({ player: this.state.player === 1 ? 2 : 1 });
    }

    render() {
        const cells = rows.map((i) =>
            cols.map((j) => (
                <Cell key={i.toString() + j.toString()} i={i} j={j}></Cell>
            ))
        );
        return <div style={board}>{cells}</div>;
    }
}
