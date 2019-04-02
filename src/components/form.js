import React from 'react';

const Form = (props) => {
    return (
	<form onSubmit={props.loadWeather}>
          <input type="text" name="city" placeholder="City" />
          <button>Get Weather</button>
	</form>
    );
};

    //<input type="text" name="country" placeholder="Country" />

export default Form;
