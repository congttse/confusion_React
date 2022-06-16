import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            text:'abc',
            x: 0,
            y: 0
        };
    }
    handleInput=(e)=>{
        this.setState({text: e.target.value});
    }
    handleMouse=(e)=>{
        this.setState({x: e.screenX, y: e.screenY});
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.text} onChange={this.handleInput} />
                <img src="public/logo192.png" onMouseMove={this.handleMouse}></img>
                <h1>{this.state.x}, {this.state.y}</h1>
            </div>
        )
    }
}

export default Form;