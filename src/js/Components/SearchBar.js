import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

var SearchBar = createReactClass({
    onhandleChangeText : function () {
       var filtText = this.refs.inp.value;
       this.props.changeText(filtText);
    },
    render : function () {
        return (
            <div>
                <input type="text" ref='inp' onChange={this.onhandleChangeText}/><br/>
                <input type="checkbox" onClick={this.props.changeFun}/>
                Only show products in stock
            </div>
        )
    }
});

export default SearchBar;