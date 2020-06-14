import React, { Component } from "react";
import Fourinarow from "./components/Fourinarow";

export default class App extends Component {
    render() {
        return (
            <div>
                <header>4 in a row</header>
                <Fourinarow />
            </div>
        );
    }
}
