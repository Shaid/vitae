var React = require('react');

/**
 * @jsx React.DOM
 */
var ArrayParagraph = React.createClass({
    render: function() {
        return (
                <div>
                {this.props.array.map(function(paragraph, index) {
                        return <p key={index}>{paragraph}</p>
                })}  
                </div>
        );
    }
});

module.exports = ArrayParagraph;
