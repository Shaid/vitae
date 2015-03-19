var $ = require('jquery')(window);
var Backbone = require('backbone');
//Backbone.$ = $;

var Debug = require('./utils/DebugUtil');

var Router = require('./routers/router.js');
var router = new Router();

/*
// disable back event in browser.
$("body").on("click", ".back-button", function (event) {
    event.preventDefault();
    window.history.back();
});
*/

Backbone.history.start({pushState: false});

    