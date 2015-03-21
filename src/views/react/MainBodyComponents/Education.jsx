var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
/**
 * @jsx React.DOM
 */
var Education = React.createClass({
    render: function () {    
        var education = this.props.data;
        return (
            <section id="employment">
                <h2>
                    <Icon icon="communication-business" />
                    Education
                </h2>
            </section>
        );
    }
});

module.exports = Education;
