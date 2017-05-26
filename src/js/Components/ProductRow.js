import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


var ProductRow = createReactClass({
    render : function () {
        var styles = {};
        this.props.stocked ? styles.color = '#000' : styles.color = 'red';
        return (
            <tr style={styles}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
});

export default ProductRow;