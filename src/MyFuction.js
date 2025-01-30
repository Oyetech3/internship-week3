import React, { Component } from 'react';

class MyFuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "blue",
            secondColor: "green",
            favoriteColor: 'blue' 
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoriteColor : "green"
            })
        },5000)
    }

    shouldComponentUpdate() {
        return true
    }


    getSnapshotBeforeUpdate(prevprops, prevstates) {
        document.getElementById('div1').innerHTML = prevstates.favoriteColor
    }

    componentDidUpdate() {
        document.getElementById('div2').innerHTML = this.state.favoriteColor
    }

    changeColor = () => {
        this.setState({ color: "red" });
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: this.state.color }}>Internship Week 3</h1>
                <p style={{ color: this.state.secondColor }}>Hello World</p>
                <p style={{color: this.state.favoriteColor}}>My favorite color is {this.state.favoriteColor}</p>
                <button onClick={this.changeColor}>Change Heading Color</button>
                <button onClick={() => this.setState({ secondColor: "blue" })}>Change Paragraph Color</button>

                <div>
                    <h3>Componenent Changes</h3>
                    <p>Wait for 5 seconds</p>
                    <div id='div1'></div>
                    <div id='div2'></div>
                </div>

                <FunctionComponent name={"Oyekola"}/>

            </div>
        );
    }
}

function FunctionComponent({name}) {
    return (
        <>
        <h3 style={{color: 'blue'}}>Function Component with fragment</h3>
        <p>Hello , My Prop is <span style={{color: 'red', fontWeight:'bold'}}>{name}</span></p>
        </>
    )
}

export default MyFuction;
