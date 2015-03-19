var Backbone = require('backbone');
var Debug = require('../utils/DebugUtil');

var ResumeModel = Backbone.Model.extend({    
    urlRoot: '/api/client/',
    defaults: {
        name: 'Jen Eric',
        role: 'Web Monkey'
    },
        serialize: function () {
        return this.toJSON();
    },
    initialize: function () {
        this.fetch();
    }
});

module.exports = ResumeModel;
