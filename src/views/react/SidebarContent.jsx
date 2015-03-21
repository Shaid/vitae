var React = require('react');

var Icon = require('./Icon.jsx');
var ArrayParagraph = require('./ArrayParagraph.jsx');
/**
 * @jsx React.DOM
 */
var SidebarContent = React.createClass({    
    render: function() {
        var content = this.props.content;
        
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

module.exports = SidebarContent;
