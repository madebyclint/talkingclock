// From https://github.com/ForbesLindesay/tutorials-for-building-real-apps/tree/master/04-react-clock


var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('clockcontainer');

// ReactDOM.render(
//     React.createElement(
//         'p',
//         {},
//         'This is a paragraph of text with ',
//         React.createElement(
//             'a',
//             {href: 'http://www.example.com'},
//             'links to other web sites'
//         ),
//         ', ',
//         React.createElement(
//             'b',
//             {},
//             'some text in bold'
//         ),
//         ' and ',
//         React.createElement(
//             'i',
//             {},
//             'some text in italics'
//         )
//     ),
//     container
// )

// ReactDOM.render(
//     React.createElement(
//         'p',
//         {},
//         'The time is: ',
//         React.createElement(
//             'b',
//             {},
//             'Tue Nov 03, 2015 23:37:07 GMT+0000 (GMT)'
//         )
//     ),
//     container
// )


// create a 'class' or 'custom react element'
var Counter = React.createClass({
    // the display name is just for debugging purposes, you can ignore it
    displayName: 'Counter',

    // custom element have an internal `this.state` object. You can set its
    // initial value here
    getInitialState: function () {
        return {
            count: 0
        };
    },

    // this is an event handler. It is called when the button is clicked
    _onClick: function () {
        this.setState({
            count: this.state.count + 1
        });
    },

    // the render method is called by react any time something changes,
    // it should return the updated structure of the DOM.
    render: function () {
        return React.createElement(
            'button',
            // this is where we bind the event handler to the button clicke event
            // unlike with attachEventListener, there is no need to remember to
            // un-bind the event, and no need to worry about it being addedd multiple
            // times
            {onClick: this._onClick},
            // render the current count as the content of the button
            this.state.count
        );
    }
});

ReactDOM.render(
    React.createElement(Counter, {}),
    container
);