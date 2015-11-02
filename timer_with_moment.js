'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var moment=require('moment');

var data = moment().subtract(43, 'seconds');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            now : moment()
        };
    },
    componentDidMount: function() {
        setInterval(this.tick, 1000); // when loaded
    },
    tick: function() {
        this.setState({
            now : moment() // call the render every time
        });
    },
    render: function() {
        return (
            <div> { (this.state.now).from(this.props.fixedTime) } </div>
        );
    }
});
ReactDOM.render( <Timer fixedTime={data}/> , document.getElementById('timer'));
