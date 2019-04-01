import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles.js';
import Form from './components/form.js';
import Weather from './components/weather.js';
const mykey = '70bb3a4746bfecb61047d283c0f2528c';

// const getWeather = async (e) => {
//     e.preventDefault();
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${mykey}`);
//     const response = await api_call.json();
//   console.log(response);
// };

class App extends Component {

    state = {
    	temperature: undefined,
    	city: undefined,
    	country: undefined,
    	humidity: undefined,
    	description: undefined,
    	error: undefined
    }

    getWeather = async (e) => {

	const city = e.target.elements.city.value;
	const country = e.target.elements.country.value;
	e.preventDefault();
	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${mykey}`);
	const response = await api_call.json();
	console.log(response);
	
	if(city && country){
	    this.setState({
		temperature: response.main.temp,
		city: response.name,
		country: response.sys.country,
		humidity: response.main.humidity,
		description: response.weather[0].description,
		error: ""
	    });
	}
	else {
	    this.setState({
		error: "Please input search values..."
	    });
	}
    };

    render() {
	return (
	    <div>
	      <Titles />
	      <Form loadWeather={this.getWeather} />
	      <Weather />
	    </div>
	);
    }
}

export default App;
