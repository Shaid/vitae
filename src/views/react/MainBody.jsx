var React = require('react');

var Employment = require('./MainBodyComponents/Employment.jsx');
var Education = require('./MainBodyComponents/Education.jsx');
var Skills = require('./MainBodyComponents/Skills.jsx');

/**
 * @jsx React.DOM
 */
var MainBody = React.createClass({
    render: function () {        
        var resume = this.props.resume;
        return (
            <div className="page__content">
                <Employment data={resume.employment} />
                <Education data={resume.employment} />
                <Skills data={resume.employment} />
            </div>
        );
    }
});

module.exports = MainBody;
