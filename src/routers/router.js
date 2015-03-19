var Backbone = require('backbone');

var Debug = require('../utils/DebugUtil');
var Resume = require('../models/Resume');

var ResumeView = require('../views/ResumeView');

var Router = Backbone.Router.extend({
    DEFAULT_CLIENT: 'jez-templeton',
    routes: {
        "!/resume/:name": "viewResume",
        "": "default"
    },
    viewResume: function (name) {        
        var resume = new Resume({id: name});
        var resumeView = new ResumeView({model: resume});                               
        Debug.log('Main view context follows:', resumeView);
    },
    default: function () {
        return this.viewResume(this.DEFAULT_CLIENT);
    }
});

module.exports = Router;
