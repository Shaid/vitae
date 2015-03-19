var Backbone = require('backbone');

var Resume = require('../models/Resume');

var ResumeView = require('../views/ResumeView');

var Router = Backbone.Router.extend({
    DEFAULT_CLIENT: 'jez-templeton',
    routes: {
        "!/resume/:name": "viewResume",
        "": "default"
    },
    viewResume: function (name) {        
        var resume = new Resume({name: name});
        var resumeView = new ResumeView({model: resume});                         
        resumeView.render();
    },
    default: function () {
        return this.viewResume(this.DEFAULT_CLIENT);
    }
});

module.exports = Router;
