// From https://github.com/ForbesLindesay/tutorials-for-building-real-apps/tree/master/04-react-clock


var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('clockcontainer');

var Counter = React.createClass({
    displayName: 'Counter',

    getInitialState: function() {
        return {
            count: 0
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
            this.setState({
                count: this.state.count + 1
            });
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
            this.state.count
        );
    }
});

ReactDOM.render(
    React.createElement(Counter, {}),
    container
);