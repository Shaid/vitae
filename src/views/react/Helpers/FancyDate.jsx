var React = require('react');

var Moment = require('moment');

/**
 * @jsx React.DOM
 */
var FancyDate = React.createClass({    
    render: function () {
        var date = this.props.date;
        if (date === 'now') { 
            date = "Present";
        } else {
            date = Moment(date).format("MMMM YYYY");
        }  
        return (
            <span>{date}</span>
        );
    }
});

module.exports = FancyDate;
