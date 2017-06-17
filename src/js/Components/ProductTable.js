import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

var ProductTable = createReactClass({
    // render里面的逻辑部分可以写在componentWillmount
    componentWillMount: function () {
        this.handleChangeC();
    },
    shouldComponentUpdate: function (nextProps, nextState){
        this.props = nextProps;//做到及时的更新，、nextProps才是最新的props
        this.handleChangeC();
        return true;
    },
    handleChangeC:function () {
        var products = this.props.products;
        var row = [];
        var lastCategory = '';
        var onlyShowStocked = this.props.onlyShowStocked;
        var filtText = this.props.filtText;
        products.forEach(function (ele, index){
            if(lastCategory != ele.category){
                lastCategory = ele.category;
                row.push(<ProductCategoryRow key={index} category={ele.category}></ProductCategoryRow>)
            }
            if( !(onlyShowStocked && !ele.stocked) ){
                if( ele.name.indexOf(filtText) !== -1){
                    row.push(<ProductRow key={index + 100} name={ele.name} price={ele.price} stocked={ele.stocked}></ProductRow>)
                }
            }
        })
        this.row = row;
    },
    render : function () {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.row}
                    </tbody>
                </table>
            </div>
        )
    }
});

export default ProductTable;