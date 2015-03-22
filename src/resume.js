var $ = require('jquery')(window);
var Backbone = require('backbone');
//Backbone.$ = $;

var Debug = require('./utils/DebugUtil');

var Router = require('./routers/router.js');
var router = new Router();

var React = require('react');
var ResumePage = require('./views/Resume.jsx');

React.render(            
    <ResumePage router={router} />,
    document.body            
);   
    
Backbone.history.start({pushState: false});
