var React = require('react');
var _ = require('lodash');

var ControlButtons = require("./control-buttons");
var JSONRow = require("./json-row");


var JSONFileUpload = React.createClass({
    processInputData: function (input) {
        var that = this;
        if (_.isObject(input)) {
            return (<table className="table table-bordered">
                <tbody>{that.handleObject(input)}</tbody>
            </table>)
        }
        else if (_.isArray(input)) {
            var keys = _.keysIn(input);
            return keys.map(function (key) {
                that.handleString(input[key]);
            });
        }
        else if (_.isString(input)) {
            return that.handleString(input);
        }
        else if (_.isNumber(input)) {
            return that.handleNumber(input);
        }
        else if (_.isNull(input)) {
            return that.handleNull(input);
        }
        else {
            return that.handleUnknown(input);
        }
    },
    handleObject: function (input) {
        var that = this;
        var keys = _.keysIn(input);

        return keys.map(function (key) {
            return (<JSONRow id={key}
                             value={that.processInputData(input[key])}/>
            )
        });
    },
    _dataChangeHandler(){
        console.log('called');
    },

    _editHandler(){

    },
    handleArray: function (input) {
        var that = this;
        return input;
    },
    handleString: function (input) {
        var that = this;
        return input;
    },
    handleNumber: function (input) {
        var that = this;
        return input;
    },
    handleNull: function (input) {
        var that = this;
        return input;
    },
    handleUnknown: function (input) {
        var that = this;
        return input;
    },
    render: function () {
        return (
            <div className="json-file-processor">
                {this.processInputData(this.props.data)}
            </div>
        );
    }
});

module.exports = JSONFileUpload;
