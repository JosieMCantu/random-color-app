import React, { Component } from 'react';
import Display from '../components/colors/Display';

const colorArray = [
    '#ff9999',
    '#00b3b3',
    '#99b3ff',
    '#4d004d',
    '#5353c6',
    '#ff4d4d',
    '#00b300',
    '#80d4ff',
    '#aa80ff',
    '#ff794d',
];

const randomColor = () => {
    const random = Math.floor(Math.random() * colorArray.length);
    return colorArray[random];
}


export default class RandomColor extends Component {
    state = {
        color: '',
    };

componentDidMount = () => {
    setInterval(() => {
    const color = randomColor();
    this.setState({color})}, 1000)
    }

render() {
    const { color } = this.state;
    return (
        <div>
        <Display color={ color } />
        </div>
        )
    }
}

