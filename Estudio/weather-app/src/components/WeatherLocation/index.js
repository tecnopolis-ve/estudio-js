import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather';
import api_weather from './../../constans/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'; 
import { 
    SUN
} from './../../constans/weathers';

const data = {
    temperature: 7,
    weatherState: SUN,
    humidity: 80,
    wind: '50 m/s'
};

class WeatherLocation extends Component {   

    constructor() {
        super();
        this.state = {
            city: 'Madrid',
            data: data
        }
    };

        componentDidMount() {
            console.log('componentDidMount');
            this.handleUpdateClick();
        };
        
        componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate');
        };
        
    handleUpdateClick = () => {

        fetch(api_weather)
        .then(resolve => {
            return resolve.json();
        })
        .then(data => {
            console.log(data);
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
};

    render() {
        const {city, data} = this.state; 
        return (
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}
   
export default WeatherLocation; 