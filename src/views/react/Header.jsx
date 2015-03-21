var React = require('react');

var HeaderContent = require('./HeaderContent.jsx');
var Icon = require('./Helpers/Icon.jsx');
/**
 * @jsx React.DOM
 */
var Header = React.createClass({
    render: function() {
        var resume = this.props.resume;
        
        return (
            <div className="page__sidebar">
                <header>
                    {/*<img className="avatar" src={resume.avatar} />*/}
                    <h1>{resume.name}</h1>
                    <h2>Resume</h2>
                </header>
                
                {resume.sidebar.map(function (content, index) {                                            
                    return <HeaderContent content={content} />
                })}       

                <section id="contact">
                    <h2><Icon icon="editor-format-quote" />Contact Me</h2>
                    <p><Icon icon="communication-email" /><a href="mailto:{resume.contacts.email}">{resume.contacts.email}</a></p>
                    <p><Icon icon="communication-phone" />{resume.contacts.phone}</p>
                    <p><Icon library="octicon" icon="mark-github" /><a href={"//github.com/" + resume.contacts.github}>{resume.contacts.github} @ github</a></p>
                </section>
            </div>
        );
    }
});

module.exports = Header;