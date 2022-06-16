import React from "react";

class Store extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     itemName: 'Rose',
        //     number: 1000
        // };
        this.getItem = this.getItem.bind(this);
    }
    getItem(){
        // this.setState({number: this.state.number - 1})
        this.props.onChangeNumber();
    }
    render(){
        return(
            <div>
                <h1>Item name: {this.props.itemName}</h1>
                <h1>Number of roses in stock: {this.props.number}</h1>
                <button onClick={this.getItem}>Add to cart</button>
            </div>
        )
    }
}

export default Store