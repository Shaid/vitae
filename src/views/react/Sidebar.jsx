var React = require('react');

var ArrayParagraph = require('./ArrayParagraph.jsx');
var Icon = require('./Icon.jsx');

var SidebarContent = React.createClass({    
    render: function() {
        var content = this.props.content;
        console.log(this);
        return (
                <article id={"sidebar-"+ content.title}>
                    <h2>
                        <Icon icon={content.icon} />
                        {content.title}
                    </h2>
                    <ArrayParagraph array={content.body} />
                </article>
        );
    }
});

/**
 * @jsx React.DOM
 */
var Sidebar = React.createClass({
    render: function() {
        var resume = this.props.resume;
        
        return (
            <section>
                <header>
                        <h1>{resume.name}</h1>
                        <h2>Resume</h2>
                </header>
                
                {resume.sidebar.map(function (content, index) {                                            
                    return <SidebarContent content={content} />
                })}       

                <section id="contact">
                    <h2><Icon icon="format-quote" />Contact Me</h2>
                    <p><Icon icon="communication-email" /><a href="mailto:{resume.contacts.email}">{resume.contacts.email}</a></p>
                    <p><Icon icon="communication-phone" />{resume.contacts.phone}</p>
                    <p><Icon library="other" icon="github" /><a href={"//github.com/" + resume.contacts.github}>{resume.contacts.github} @ github</a></p>
                </section>
            </section>
        );
    }
});

module.exports = Sidebar;