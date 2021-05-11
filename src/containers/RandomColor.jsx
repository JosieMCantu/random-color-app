import React, { Component } from 'react';
import Display from '../components/colors/Display';

const colorArray = [
    '#ff9999',
    '#00b3b3',
    '#99b3ff',
    '#4d004d',
    '#5353c6',
    '#ff4d4d',
];

const randomColor = () => {
    for(let i = 0; i < colorArray.length; i++) {
        const random = Math.floor(Math.random() * i);
        console.log(random);
       }
    return colorArray[random];
}


export default class RandomColor extends Component {
    state = {
        color: '',
    };

    componentDidMount = () => {
        const color = setInterval(randomColor(), 1000)
        this.setState({color})
    }

    render() {
        const { color } = this.state;
        return (
            <>
                <Display color={color} />
            </>
        )
    }
}

