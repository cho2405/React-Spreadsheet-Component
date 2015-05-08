var React = require('react');

var CellComponent = require('./cell');
var Helpers = require('./helpers');

var RowComponent = React.createClass({
    render: function() {
        var config = this.props.config,
            cells = this.props.cells,
            columns = [],
            key, uid, selected;

        if (!config.columns || cells.length !== config.columns) {
            return console.error(
                'Table Component: Number of columns in config and data mismatch.',
                'Config: columns: ' + config.columns + ' Data: columns: ' + cells.length
            );
        }

        for (var i = 0; i < cells.length; i++) {
            // If a cell is selected, check if it's this one
            selected = Helpers.equalCells(this.props.selected, [this.props.uid, i]);

            key = 'row_' + this.props.uid + '_cell_' + i;
            uid = [this.props.uid, i];
            columns.push(<CellComponent key={key} 
                                       uid={uid}
                                       value={cells[i]}
                                       config={config}
                                       onCellValueChange={this.props.onCellValueChange} 
                                       handleSelectCell={this.props.handleSelectCell}
                                       handleDoubleClickOnCell={this.props.handleDoubleClickOnCell}
                                       selected={selected} 
                                       editing={this.props.editing} />
            );
        };

        return (
            <tr>
                {columns}
            </tr>
        );
    }
});

module.exports = RowComponent;