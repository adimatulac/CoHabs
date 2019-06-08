import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        name: null,
        type: null,
        message: null
    }
    handleChannge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddItem(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" onChange={this.handleChannge}/>
                    <label htmlFor="name"> Age: </label>
                    <input type="text" id="type" onChange={this.handleChannge}/>
                    <label htmlFor="name"> Message: </label>
                    <input type="text" id="message" onChange={this.handleChannge}/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddItem