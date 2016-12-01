// From https://github.com/ForbesLindesay/tutorials-for-building-real-apps/tree/master/04-react-clock

import React from 'react';
import {render} from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hr: 0,
            min: 0,
            sec: 0
        };
    }

    render() {
        return (<p> {this.state.hr} </p>);
    }
}

render(<Timer/>, document.getElementById('clockcontainer'));