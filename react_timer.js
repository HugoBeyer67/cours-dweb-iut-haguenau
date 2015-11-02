
'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            timeElapsed: 0
        };
    },
    componentDidMount: function() {
        setInterval(this.tick, 1000); // when loaded
    },
    tick: function() {
        this.setState({
            timeElapsed: this.state.timeElapsed + 1 // call the render every time
        });
    },
    render: function() {
        return (
            <div> Time elapsed is : {this.state.timeElapsed } </div>
        );
    }
});
ReactDOM.render( <Timer/> , document.getElementById('timer'));
