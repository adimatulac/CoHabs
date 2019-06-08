import React, { Component} from 'react';


class AddForm extends Component {
    state = {
        content: '',
        popup:'',
        tag: ''
    }
    handleChange = (e) =>  {
        this.setState({
            content: e.target.value
        })
    }
    handleChangeDetail = (e) =>  {
        this.setState({
            popup: e.target.value
        })
    }
    handleTag = (e) =>  {
        this.setState({
            tag: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoX(this.state);
        this.setState({
            content: '',
            popup: '',
            tag: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p> Add New Task </p>
                    <label> Task:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <label> Details:</label>
                    <input type="text" onChange={this.handleChangeDetail} value={this.state.popup}/>
                    <label> Tag</label>
                    <input type="text" onChange={this.handleTag} value={this.state.tag}/>
                    
                    <button class="btn waves-effect waves-light" type="submit" name="action" onClick= {this.handleSubmit}>Submit
                    <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddForm