import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


var ProductCategoryRow = createReactClass({
    render : function () {
        return (
            <tr>
               <th>{this.props.category}</th>
            </tr>
        )
    }
});

export default ProductCategoryRow;