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
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" className="form-control" onChange={this.handleChannge}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name"> Age: </label>
                    <input type="text" id="type" className="form-control" onChange={this.handleChannge}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name"> Message: </label>
                    <input type="text" id="message" className="form-control" onChange={this.handleChannge}/>
                    </div>
                    <button type="button" className="btn btn-primary"> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddItem