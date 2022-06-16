import React from "react";

class Warning extends React.Component{
    constructor(){
        super();
        // this.display=this.display.bind(this);
    }
    // display(){
    //     alert('Welcome to handling event');
    // }
    display=(msg)=>{
        // alert('Welcome to handling event');
        alert(msg);
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.display("Yeu co")}>Click me</button>
            </div>
        )
    }
}

export default Warning;