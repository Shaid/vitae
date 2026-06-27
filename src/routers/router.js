var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = Backbone.Router.extend({
    DEFAULT_CLIENT: 'cassandra-templeton',
    
    routes: {
        "!/resume/:client": "viewResume",
        "": "default"
    },
    default: function () {
        this.navigate("!/resume/"+ this.DEFAULT_CLIENT, {trigger: true, replace: true});        
    }
});

module.exports = Router;
