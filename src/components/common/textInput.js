"use strict";

var React = require('react');

var Input = React.createClass({
    propTypes: {
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired,
            onChange: React.PropTypes.func.isRequired,
            placeholder: React.PropTypes.string,
            value: React.PropTypes.string,
            error: React.PropTypes.string

            
        },

    render: function() {
        var wrapperClass="form-group col-lg-2 col-md-3 col-sm-5 col-xs-10";
        if(this.props.error && this.props.error.length >0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className="row">
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type = "text"
                        name = {this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
            </div>
        );
    }
});

module.exports = Input;