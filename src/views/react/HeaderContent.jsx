var React = require('react');

var Icon = require('./Helpers/Icon.jsx');
var ArrayParagraph = require('./Helpers/ArrayParagraph.jsx');
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

module.exports = HeaderContent;
