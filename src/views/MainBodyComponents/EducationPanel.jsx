var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
var FancyDate = require('../Helpers/FancyDate.jsx');
var DotPointer = require('../Helpers/DotPointer.jsx');

/**
 * @jsx React.DOM
 */
var EducationItem = React.createClass({     
    render: function () {        
        var course = this.props.course;
        
        var sections = "";        
        if(typeof course.sections !== 'undefined' && course.sections.length > 0){
            sections = course.sections.map(function (section, index) {
                return (<DotPointer key={index} data={section} />)
            });
        }
        
        return (
            <article>
                <h3>{course.course}</h3>
                {course.metadata.venue ? <p className="metadata"><Icon icon="maps-place" />{course.metadata.venue}, {course.metadata.location}</p> : ""}                
                {course.metadata.url ? <p className="metadata"><Icon icon="action-home" /><a href={"http://" + course.metadata.url}>{course.metadata.url}</a></p> : ""}
                {course.date ? <p className="metadata"><Icon icon="notification-event-note" />Completed <FancyDate date={course.date} /></p>: ""}
                          
                <p className="description">{course.description}</p>
                    
                {sections}           
            </article>
        );
    }
});

/**
 * @jsx React.DOM
 */
var EducationPanel = React.createClass({
    render: function () {    
        var education = this.props.data;
        
        return (
            <section id="education">
                <h2>
                    <Icon icon="social-school" />
                    Education
                </h2>
                        
                {education.map(function (course, index) {
                    return <EducationItem key={index} course={course} />
                })}
            </section>
        );
    }
});

module.exports = EducationPanel;
