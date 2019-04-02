import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles.js';
import Form from './components/form.js';
import Weather from './components/weather.js';
require('dotenv').config();
const mykey = process.env.REACT_APP_MYKEY;

class App extends Component {
    state = {
    	temperature: undefined,
    	city: undefined,
    	humidity: undefined,
    	description: undefined,
    	error: undefined
    }

    getWeather = async (e) => {

	const city = e.target.elements.city.value;
	//const country = e.target.elements.country.value;
	const country = 'United States';
	e.preventDefault();
	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${mykey}`);
	const response = await api_call.json();
	console.log(response.main.temp);
	//console.log((9/5) * (response.main.temp - 273.15) + 32);
	//const farenheit = (9/5) * (response.main.temp - 273) + 32;
	//console.log(farenheit);

	if(city && country){
	    this.setState({
		farenheit: Math.round((9/5) * (response.main.temp - 273) + 32),
		city: response.name,
		description: response.weather[0].description
	    });
	    return <h1>{this.state.farenheit}°F</h1>;
	}
	else {
	    this.setState({
		error: "Please input search values..."
	    });
	}
    };

    render() {
	const farenheit = this.state.farenheit;
	let displaytemp;

	if (farenheit) {
	    displaytemp = <h1>{this.state.farenheit}°F</h1>;
	}
	
	return (
	    <div>
	      <Titles />
	      <Form loadWeather={this.getWeather} />
	      {displaytemp}
              <h2>{this.state.city}</h2>
	      <Weather />
	    </div>
	);
    }
}

export default App;
