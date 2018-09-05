import React, {Component} from 'react';
import Form from './Form';
import WeatherWidget from './WeatherWidget';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.getWeatherText = this.getWeatherText.bind(this);
        this.state = {
            city: '',
            weatherText: ''
        }
    }

    onSubmit(city) {
        this.setState({ city })
    }

    getWeatherText (weatherText) {
        this.setState({ weatherText })
    }

    render() {
        return (
            <div className={`App flex-column full-size ${this.state.weatherText}`}>
                <WeatherWidget city={this.state.city} getWeatherText={this.getWeatherText}/>
                <Form onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default App;
