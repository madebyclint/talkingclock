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

ReactDOM.render(
    React.createElement(
        'p',
        {},
        'The time is: ',
        React.createElement(
            'b',
            {},
            'Tue Nov 03, 2015 23:37:07 GMT+0000 (GMT)'
        )
    ),
    container
)

