import React from 'react';
import styled from "styled-components";

let FormDiv = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
`;

const Form = (props) => {
    return (
        <FormDiv>
	  <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City" />
            <button>Get Weather</button>
	  </form>
	</FormDiv>
    );
};

//<input type="text" name="country" placeholder="Country" />

export default Form;
