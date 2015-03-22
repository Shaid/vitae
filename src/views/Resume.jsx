var $ = require('jquery');
var React = require('react');
var Debug = require('../utils/DebugUtil');

var Header = require('./Header.jsx');
var MainBody = require('./MainBody.jsx');

var ErrorPage = require('./ErrorPage.jsx');

/**
 * @jsx React.DOM
 */
var Resume = React.createClass({
    // api shenanigans
    fetchResume: function (client) {
        var url = this.props.urlBase + client;
        
        this.getData(url, this.pushResumeToState, this.invalidResume);        
    },
    pushResumeToState: function (resume) {
        this.setState({resume: resume, valid: true});  
    },    
    invalidResume : function () {         
        this.setState({valid: false});
    },
    // router shit
    processRoute: function (route, params) {        
        if(typeof this[route] === 'function'){
            console.log("[Routing]: " + route + ":", params)
            this[route].apply(this, params);
        }else{            
            console.log('Route ' + route + 'undefined. Lols.');
        }
    },
    /**
     * @route "!/resume/:client"
     */
    viewResume: function (client) {                       
        this.setState({client: client});
        this.fetchResume(client);        
    },
    // boilerplate
    componentWillMount: function () {                        
        this.props.router.on("route", this.processRoute);
        //setInterval(this.fetchResume, this.props.pollInterval);
    },
    componentWillUnmount: function() {
        this.props.router.off("route", this.processRoute);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        if(nextState.client !== this.state.client){
            return false;
        }        
        return true;
    },
    getInitialState: function () {
        return {
            valid: false
        };
    },
    getDefaultProps: function () {
        return {
            pollInterval: "2000",
            urlBase: '/api/client/'
        };
    },
    // main render stuff
    render: function () {
        var router = this.props.router;                
        
        if(this.state.valid === true){        
            document.title = this.state.resume.name + ' | Resume';
            return (
                <div className = "page">
                    <Header resume = {this.state.resume} />
                    <MainBody resume = {this.state.resume} />
                </div>
            );
        }else{
            return (
                <div className="page">
                    <ErrorPage client={this.state.client} error="Resume not found." />
                </div>
            );
        }
    },
    
    getData: function (url, successCallback, failureCallback, completeCallback) {
        var self = this;
        if (typeof successCallback === 'undefined') {
            successCallback = this.defaultRequestSuccessHandler;
        }

        if (typeof failureCallback === 'undefined') {
            failureCallback = this.defaultRequestFailureHandler;
        }

        if (typeof completeCallback === 'undefined') {
            completeCallback = this.defaultRequestCompleteHandler;
        }
        
        // good ol' Jake Weary. What a trooper.
        var jqxhr = $.ajax({
            type: 'GET',
            url: url,
            cache: false,
            dataType: 'json'
        })
                .done(function (data) {
                    successCallback(data, self);
                })
                .fail(function (jqxkr, status) {
                    failureCallback(jqxhr, status, self);
                })
                .complete(function (jqxhr, status) {
                    completeCallback(jqxhr, status, self);
                });
        return jqxhr;
    },
    defaultRequestSuccessHandler: function (data) {
        Debug.log('Request completed: ' + data);
    },
    defaultRequestFailureHandler: function (jqxhr, statusMessage, self) {
        var errorMessage = 'Product could not be loaded. Reason: ' + jqxhr.statusText + ' <!-- error: ' + jqxhr.status + '-->';

        Debug.log(errorMessage);
        return true;
    },
    defaultRequestCompleteHandler: function (jqxhr, status, self) {
        return true;
    }
});

module.exports = Resume;
