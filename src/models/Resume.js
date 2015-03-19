var Backbone = require('backbone');
var Debug = require('../utils/DebugUtil');

var ResumeModel = Backbone.Model.extend({    
    defaults: {
        name: 'Jen Eric',
        role: 'Web Monkey'
    },
        serialize: function () {
        return this.toJSON();
    },
    initialize: function () {

    }
});

module.exports = ResumeModel;
