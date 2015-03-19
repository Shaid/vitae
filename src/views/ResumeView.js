var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

var Debug = require('../utils/DebugUtil');

var ArrayParagrapher = React.createClass({
render: function() {
    return (
            <div>
            {this.props.data.map(function(paragraph, index) {
                    return <p key={index}>{paragraph}</p>
            })}  
            </div>
    );
  }    
});

var Icon = React.createClass({
    render: function () {
        return (
                <span className={"mdi-" + this.props.icon}></span>
        );
    }
});

/**
 * @jsx React.DOM
 */
var Sidebar = React.createClass({
  render: function() {
      var resume = this.props.model;
      
    return (
        <section>
            <header>
                    <h1>{resume.name}</h1>
                    <h2>Resume</h2>
            </header>
    
            <section>
                <h2><Icon icon="action-assignment-turned-in" />Objective</h2>
                <p>{resume.biblio.objective}</p>
            </section>

            <section id="about">
                <h2><Icon icon="social-person" />About Me</h2>
                <ArrayParagrapher data={resume.biblio.about} />
            </section>

            <section id="contact">
                <h2><Icon icon="format-quote" />Contact Me</h2>
                <p><Icon icon="communication-email" /><a href="mailto:{resume.contacts.email}">{resume.contacts.email}</a></p>
                <p><Icon icon="communication-phone" />{resume.contacts.phone}</p>
            </section>
        </section>
    );
  }
});

var ResumeView = Backbone.View.extend({
    el: '.page__sidebar',
    initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        React.render(
            <Sidebar model={this.model.serialize()} />,
            this.el
        );    
    }
});

module.exports = ResumeView;