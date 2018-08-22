import React, {Component} from 'react';
import Form from './Form';
import WeatherWidget from './WeatherWidget';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            city: ''
        }
    }

    onSubmit(city) {
        this.setState({ city })
    }

    render() {
        return (
            <div className='App'>
                <Form onSubmit={this.onSubmit}/>
                <WeatherWidget city={this.state.city} />
            </div>
        );
    }
}

export default App;
