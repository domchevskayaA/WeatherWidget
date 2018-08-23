import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.search)
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <Input value={this.state.search} onChange={e => this.setState({ search: e.target.value })}/>
                <Button onClick={e => this.onSubmit(e)}/>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;