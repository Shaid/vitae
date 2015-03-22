var React = require('react');

/**
 * @jsx React.DOM
 */
var DotPointerItem = React.createClass({
    getDefaultProps: function () {
        // set up a fake item so we don't get undefined error things later on. probably better ways to do this. 
        return {            
            "item": {
                "title": false,
                "url": false,
                "body": ""
            }
        };
    },
    render: function () { 
        var item = this.props.item;
        var itemTitleString = "";
        if (item.title) {
            itemTitleString = <strong>{item.title}</strong>;
        }
        if (item.url) {
            itemTitleString = <span><strong>{item.title}</strong> &ndash; <a href={"http://" + item.url}>{item.url}</a><br /></span>;            
        }
        
        return (
            <li>{itemTitleString}{item.body}</li>
        );
    }
});

/**
 * @jsx React.DOM
 */
var DotPointer = React.createClass({
    render: function () {
        var section = this.props.data;
        return (            
            <div id={section.name}>
                <h4>{section.title}</h4>
                <ul>
                    {section.items.map(function (item, index) {
                        return (<DotPointerItem key={index} item={item} />)
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = DotPointer;
