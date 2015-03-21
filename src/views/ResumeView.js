var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

var Debug = require('../utils/DebugUtil');

var Sidebar = require('./react/Sidebar.jsx');

var ResumeView = Backbone.View.extend({
    el: '.page__sidebar',
    initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        React.render(
            <Sidebar resume={this.model.serialize()} />,
            this.el
        );    
    }
});

module.exports = ResumeView;