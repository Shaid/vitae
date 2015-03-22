var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
var DotPointer = require('../Helpers/DotPointer.jsx');
/**
 * @jsx React.DOM
 */
var SkillsPanel = React.createClass({
    render: function () {        
        var skills = this.props.data;

        return (
            <section id="skills">
                <h2>
                    <Icon icon="action-toc" />
                    Skills
                </h2>                       
                {skills.map(function (skill, index) {
                    return (<article key={index}><DotPointer data={skill} /></article>)
                })}      
            </section>
        );
    }
});


module.exports = SkillsPanel;