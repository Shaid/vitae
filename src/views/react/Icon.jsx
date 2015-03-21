var React = require('react/addons');

/**
 * @jsx React.DOM
 */
var Icon = React.createClass({
    getDefaultProps: function () {
        return {"library": "mdi"};
    },       
    render: function () {               
        var cx = React.addons.classSet;
        var iconClass = this.props.library + "-" + this.props.icon;        
        var classes = cx(this.props.library, iconClass);
        return (
                <span className={classes}></span>
        );
    }
});

module.exports = Icon;
