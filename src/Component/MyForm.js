import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            age: 0,
            email: '',
            error: {
                fullName: '',
                age: '',
                email: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputChange(event) {
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({ [nameControl]: value });
    }
    handleInputBlur(event){
        const nameControl=event.target.name;
        const value=event.target.value;
        const pattern=/^[a-zA-Z]+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/;
        if(nameControl==="fullName" && value.length < 3){
            this.setState({
               error: {...this.state.error, fullName: "Your fullName should be from 3 chars"} 
            });
        }
        else if(nameControl==="age" && (parseInt(value) < 18 || parseInt(value) < 65)){
            this.setState({
                error: {...this.state.error, age: "Your age should be from 18 to 65"}
            });
        }
        else if(nameControl==="email" && !pattern.test(value)){
            this.setState({
                error: {...this.state.error, email: "Your email should be xxx@xxx.xx or xxx@xxx.xx.xx"}
            });
        }
        else{
            this.setState({
                error: {...this.state.error, fullName: "", age: "", email: ""}
            });
        }
    }
    handleSubmit(event){
        event.preventDefault();
        alert("You clicks the submit button");
    }
    render() {
        return (
            <div className='container'>
                <div className='row row-content'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input type='text' id="fullName" name="fullName" placeholder='fullName' value={this.state.fullName}
                                valid={this.state.error.fullName === ''} invalid={this.state.error.fullName !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.fullName}</FormFeedback>

                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input type='text' id="age" name="age" placeholder='age' value={this.state.age}
                                valid={this.state.error.age === ''} invalid={this.state.error.age !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.age}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type='text' id="email" name="email" placeholder='email' value={this.state.email}
                                valid={this.state.error.email === ''} invalid={this.state.error.email !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.email}</FormFeedback>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         text: '',
    //     }
    // }
    // handleOnChange=(e)=>{
    //     this.setState({text: e.target.value})
    // }
    // handleOnSubmit=(e)=>{
    //     e.preventDefault()
    //     alert('Text was just submitted: ' + this.state.value)
    //     this.setState({
    //         text: ''
    //     })
    // }
    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleOnSubmit}>
    //                 <input type="text" value={this.state.text} onChange={this.handleOnChange}></input>
    //                 <input type="submit"></input>
    //             </form>
    //         </div>
    //     )
    // }
}
