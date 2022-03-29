import React from "react";

export class CounterClass extends React.Component {
    state = {
        count: 0,
    }

    handleClick = () => this.setState({count: this.state.count +1});

    render() {
        return(
            <div>
                class
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}