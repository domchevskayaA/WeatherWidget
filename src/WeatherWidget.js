import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getCityConditions} from './api/weatherData';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: 0,
            weatherText: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.city !== nextProps.city) {
            let cityCapitalized = nextProps.city.charAt(0).toUpperCase() + nextProps.city.slice(1);

            getCityConditions(nextProps.city)
                .then(({data: [{Temperature: { Metric: { Value } }, WeatherText}]}) => {
                        this.setState({
                            city: cityCapitalized,
                            temperature: Value + `°C`,
                            weatherText: WeatherText
                        });
                        this.props.getWeatherText(WeatherText.split(' ').join(''))
                    },() => {
                        console.log('No such city');
                        this.setState({
                            city: 'No such city',
                            temperature: '',
                            weatherText: ''
                        });
                    this.props.getWeatherText('')
                    })
                }

        }

    render() {
        return (
            <div className="WeatherWidget flex-column">
                {
                    this.state.city.length ? <div>{this.state.city} {this.state.temperature}</div> : 'No city selected'

                }
                <span>{this.state.weatherText}</span>
            </div>
        );
    }
}

WeatherWidget.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherWidget;