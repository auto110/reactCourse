import React, { Component } from 'react';
import './App.css';

class WeatherApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            temp: 0, 
            desc: '', 
            icon: '', 
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=a25f869e27704fa1f6690ae5c3def1cf')
        .then(response=>response.json())
        .then(responseData=>{
            this.setState({
                temp: responseData.main.temp,
                desc: responseData.weather[0].description,
                icon: responseData.weather[0].icon, 
                loading: false
            })
        })
        .catch(err => console.error(err))
    }

    render(){
        const imgSrc = `http://openweathermap.org/img/w/${this.state.icon}.png`;
        console.log(imgSrc);

        if(this.state.loading){
            return <p>Loading...</p>
        }else{
            return (
                <div className="App">
                    <p>Temperature: {this.state.temp} °C</p>
                    <p>Description: {this.state.desc}</p>
                    <img src={imgSrc} alt="Weather icon" />
                </div>
            )
        }
    }
}

export default WeatherApp;

// https://openweathermap.org/    2558896386@qq.com  11111111