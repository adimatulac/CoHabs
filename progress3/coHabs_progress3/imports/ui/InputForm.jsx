import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    state = {
        message: '',
        type: '',
        date: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.message.trim() && this.state.type.trim() && this.state.date.trim()) {
            console.log('listing props in input form:');
            console.log(this.props);
            console.log('adding note ...')
            console.log(this.state);
            this.props.onAddNote(this.state);
            this.handleClear();
        }
    }

    handleClear = () => {
        this.setState({
            message: '',
            type: '',
            date: ''
        });
    };
    
    render() {
        return(
            <div>
                <form id="input-form" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="message"
                        className="form-control"
                        name="message"
                        onChange={ this.handleChange }
                        value={ this.state.message }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="type"
                        className="form-control"
                        name="type"
                        onChange={ this.handleChange }
                        value={ this.state.type }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="date"
                        className="form-control"
                        name="date"
                        onChange={ this.handleChange }
                        value={ this.state.date }
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary extra-space">add</button>
                        <button type="submit" className="btn btn-secondary extra-space" onClick={ this.handleClear }>clear</button>
                    </div>
                </form>    
            </div>
        );
    }
}

export default InputForm;