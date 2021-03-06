var React = require('react');

var ArrayParagraph = require('./Helpers/ArrayParagraph.jsx');
var Icon = require('./Helpers/Icon.jsx');

/**
 * @jsx React.DOM
 */
var HeaderContent = React.createClass({    
    render: function() {
        var content = this.props.content;
        
        return (
                <section id={"header-"+ content.title}>
                    <h2>
                        <Icon icon={content.icon} />
                        {content.title}
                    </h2>
                    <ArrayParagraph array={content.body} />
                </section>
        );
    }
});

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
                
                {resume.header.map(function (content, index) {                                            
                    return <HeaderContent key={index} content={content} />
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