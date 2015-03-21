var React = require('react');

var Header = require('./Header.jsx');
var MainBody = require('./MainBody.jsx');

/**
 * @jsx React.DOM
 */
var Resume = React.createClass({
    render: function() {
        var resume = this.props.resume;

        return (
            <div className="page">
                <Header resume={resume} />
                <MainBody resume={resume} />
            </div>
        );
    }
});

module.exports = Resume;
