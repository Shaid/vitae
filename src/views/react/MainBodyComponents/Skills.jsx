var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
/**
 * @jsx React.DOM
 */
var Skills = React.createClass({
    render: function () {        
        var skills = this.props.data;
        return (
            <section id="skills">
                <h2>
                    <Icon icon="action-toc" />
                    Skills
                </h2>
            </section>
        );
    }
});

module.exports = Skills;
