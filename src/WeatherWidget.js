import React, {Component} from 'react';

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
            fetch(`http://apidev.accuweather.com/locations/v1/search?q=${nextProps.city}&apikey=hoArfRosT1215`)
                .then(res => res.json())
                .then(([{Key}]) => {
                    return fetch(`http://apidev.accuweather.com/currentconditions/v1/${Key}.json?language=en&apikey=hoArfRosT1215`).then(d => d.json())
                })
                .then(([{Temperature: { Metric: { Value } }}]) => {
                    this.setState({ city: nextProps.city, temperature: Value })
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