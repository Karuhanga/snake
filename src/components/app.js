import React from "react";

import SnakeBoard from './board'

export default class App extends React.Component{
    render() {
        return <div>
                    <h1>Snake</h1>
                    <SnakeBoard/>
                </div>
    }
}

