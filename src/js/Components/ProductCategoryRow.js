import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


var ProductCategoryRow = createReactClass({
    render : function () {
        return (
            <tr style={{fontWeight:900, color:'#00f'}}>
               <th>{this.props.category}</th>
            </tr>
        )
    }
});

export default ProductCategoryRow;