// From https://github.com/ForbesLindesay/tutorials-for-building-real-apps/tree/master/04-react-clock


var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('clockcontainer');

var Clock = React.createClass({
    displayName: 'Clock',

    getInitialState: function() {
        return {
            hr: 0,
            min: 0,
            sec: 0,
        };
    },

    // componentDidMount is called when the component has been added to the DOM
    //
    // Use it ot initialize anything that's needed for the lifetime of the
    // element
    componentDidMount: function () {
        this._interval = setInterval(function () {
            // note that because we're calling `this.setState`,
            // the function must be "bound"
            if (this.state.sec < 60) {
                this.setState({
                    sec: this.state.sec + 1
                });
            } else {
                if (this.state.min < 60) {
                    this.setState({
                        min: this.state.min + 1,
                        sec: 0
                    });
                } else {
                    this.setState({
                        hr: this.state.hr + 1,
                        min: 0,
                        sec: 0
                    });
                }
            }
        }.bind(this), 1000);
    },

    // componentWillMount is called when the component is about to be removed
    // from the DOM.
    //
    // It is importatn to dispose of anything that was created in
    // `componentDidMount`
    componentWillMount: function () {
        clearInterval(this._interval);
    },
    render: function () {
        return React.createElement(
            'p',
            {},
            this.state.hr,
            ':',
            this.state.min,
            ':',
            this.state.sec
        );
    }
});

ReactDOM.render(
    React.createElement(Clock, {}),
    container
);