var React = require('react');

var Icon = require('../Helpers/Icon.jsx');
var FancyDate = require('../Helpers/FancyDate.jsx');
var DotPointer = require('../Helpers/DotPointer.jsx');

/**
 * @jsx React.DOM
 */
var EmploymentItem = React.createClass({
    render: function () {        
        var employment = this.props.employment;
        return (
            <article>
                <h3>{employment.role}</h3>
                <p className="metadata"><Icon icon="maps-place" />{employment.employer.name}, {employment.employer.location}</p>
                <p className="metadata"><Icon icon="notification-event-note" /><FancyDate date={employment.startDate} /> &ndash; <FancyDate date={employment.endDate} /></p>
                <p className="metadata"><Icon icon="action-home" /><a href={"http://" + employment.employer.url}>{employment.employer.url}</a></p>
                                
                {employment.sections.map(function (section, index) {
                    return (<DotPointer key={index} data={section} />)
                })}               
            </article>
        );
    }
});

/**
 * @jsx React.DOM
 */
var EmploymentPanel = React.createClass({
    render: function () {        
        var employmentHistory = this.props.data;
        return (
            <section id="employment">
                <h2>
                    <Icon icon="social-school" />
                    Employment
                </h2>
        
            {employmentHistory.map(function (employment, index) {
                return <EmploymentItem key={index} employment={employment} />
            })}
            </section>
        );
    }
});

module.exports = EmploymentPanel;
