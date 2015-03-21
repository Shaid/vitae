var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
/**
 * @jsx React.DOM
 */
var Employment = React.createClass({
    render: function () {        
        var employment = this.props.data;
        return (
            <section id="employment">
                <h2>
                    <Icon icon="social-school" />
                    Employment
                </h2>
            </section>
        );
    }
});

module.exports = Employment;
