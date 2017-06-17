import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import SearchBar from './Components/SearchBar.js';
import ProductTable from './Components/ProductTable.js';


var Appshow = createReactClass({
    getInitialState : function () {
        return {
            onlyShowStocked : false,//全部显示
            filtText : ''
        }
    },
    changeShowStocked : function () {
        this.setState({
           onlyShowStocked: !this.state.onlyShowStocked
        })
    },
    changeFiltText : function (text) {
        this.setState({
            filtText : text
        })
    },
    render : function () {
        return (
            <div>
                <SearchBar changeFun={this.changeShowStocked} changeText={this.changeFiltText}/>
                <ProductTable  filtText={this.state.filtText} onlyShowStocked={this.state.onlyShowStocked} products={this.props.products}/>
            </div>
        )
    }
});

var PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iWatch"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "iPad"}

];

ReactDOM.render(
    <Appshow products={PRODUCTS}/>,
    document.getElementById('root')
)
