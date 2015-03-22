var React = require('react');

var EmploymentPanel = require('./MainBodyComponents/EmploymentPanel.jsx');
var EducationPanel = require('./MainBodyComponents/EducationPanel.jsx');
var SkillsPanel = require('./MainBodyComponents/SkillsPanel.jsx');

/**
 * @jsx React.DOM
 */
var MainBody = React.createClass({
    render: function () {        
        var resume = this.props.resume;
        return (
            <div className="page__content">
                <EmploymentPanel data={resume.employment} />                
                <EducationPanel data={resume.education} />
                <SkillsPanel data={resume.skills} />
            </div>
        );
    }
});

module.exports = MainBody;
