import React, { Component } from "react";

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: props.i,
            j: props.j,
            color: "white",
        };
    }

    setToken() {
        this.setState({ color: "blue" });
        console.log(this.state);
    }

    cellStyle() {
        return {
            background: this.state.color,
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            borderColor: "black",
            outline: "none",
        };
    }

    render() {
        return (
            <button
                style={this.cellStyle()}
                onClick={this.setToken.bind(this)}
            ></button>
        );
    }
}
