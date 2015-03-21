var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var React = require('react');

var Debug = require('../utils/DebugUtil');

var Header = require('./react/Header.jsx');
var ResumePage = require('./react/Resume.jsx');

var ResumeView = Backbone.View.extend({
    el: 'body',
    
    initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        document.title = this.model.get('name') + ' | Resume';
        
        React.render(            
            <ResumePage resume={this.model.serialize()} />,
            this.el
        );    
    }
});

module.exports = ResumeView;