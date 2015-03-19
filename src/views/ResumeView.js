var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

var Debug = require('../utils/DebugUtil');

/**
 * @jsx React.DOM
 */
var Resume = React.createClass({
  render: function() {
    return (
      <div className="resume">
        <h2 className="resumeSubject">
            {this.props.model.get('name')}
        </h2>
        <h3>
            {this.props.model.get('role')}
        </h3>
      </div>
    );
  }
});

var ResumeView = Backbone.View.extend({
    el: '#resume-container',
    initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        React.render(
            <Resume model={this.model} />,
            this.el
        );
    console.log(this);
    }
});

module.exports = ResumeView;