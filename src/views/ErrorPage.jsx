var React = require('react');

/**
 * @jsx React.DOM
 */
var ErrorPage = React.createClass({
    render: function () {        
        return (
            <div className="page__content">
            <h1>{this.props.error} - {this.props.client}</h1>
            </div>
        );
    }
});

module.exports = ErrorPage;
