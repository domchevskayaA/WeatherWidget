import React, {Component} from 'react';
import {getCityConditions} from './api/weatherData';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            temperature: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.city !== nextProps.city) {
            getCityConditions(nextProps.city)
                .then(({data: [{Temperature: { Metric: { Value } }}]}) => this.setState({
                    city: nextProps.city,
                    temperature: Value
                }), () => {
                    console.log('No such city');
                    this.setState({
                        city: ''
                    })
                })

        }
    }

    render() {
        return (
            <div className="WeatherWidget">
                {
                    this.state.city.length > 0 &&
                    <div>
                        {this.state.city} {this.state.temperature}<sup>°C</sup>
                    </div>
                }
                {
                    this.state.city.length === 0 &&
                    'No data'
                }
            </div>
        );
    }
}

export default WeatherWidget;