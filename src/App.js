import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles.js';
import Form from './components/form.js';
import Weather from './components/weather.js';
import styled from "styled-components";

require('dotenv').config();
const mykey = process.env.REACT_APP_MYKEY;

let Main = styled.div`
background: #7CDBD5;
//display: flex;
//justify-content: center;
flex-direction: column;
margin:auto;
width: 50%;
`;

let H1 = styled.h1`
color: white;
`;

let Img = styled.img`
max-width: 50;
max-width: 50px;
`;

let Degrees = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
`;

let H2 = styled.h2`
color: white;
`;

let H3 = styled.h3`
color: white;
`;

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
	const country = 'United States';
	e.preventDefault();
	const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${mykey}`);
	const response = await api_call.json();
	console.log(response);

	if(city && country){
	    this.setState({
		farenheit: Math.round((9/5) * (response.main.temp - 273.15) + 32),
		//farenheit: Math.round((9/5) * (response.main.temp) - 459.67),
		city: response.name,
		description: response.weather[0].description,
		weather: response.weather[0].main,
		icon: response.weather[0].icon
	    });
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
	let displaydescription;
	let displayicon;
	let icon = this.state.icon;
	let iconimage;
	let descriptionandcity;
	
	if (farenheit) {
	    displaytemp = <H1>{this.state.farenheit}°F</H1>;
	    displaydescription = <H1>{this.state.description}</H1>;
	    displayicon = `https://openweathermap.org/img/w/${icon}.png`;
	    iconimage = <Img alt="icon" src={displayicon}/>;
	    descriptionandcity = <H3>{displaydescription} in {this.state.city}</H3>;
	}
	
	return (
	    <Main>
	      <Titles />
	      <Form loadWeather={this.getWeather} />
              <Degrees>
		{displaytemp}
		{iconimage}
	      </Degrees>
	      {descriptionandcity}
	      <Weather />
	    </Main>
	);
    }
}

export default App;
