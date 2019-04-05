import React from 'react';
import styled from "styled-components";

let FormDiv = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
`;

let Button = styled.button`
background: white;
height: 20px;
padding: 0 10px;
color: black;
`;


const Form = (props) => {
    return (
        <FormDiv>
	  <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City" />
            <Button>Get Weather</Button>
	  </form>
	</FormDiv>
    );
};

//<input type="text" name="country" placeholder="Country" />

export default Form;
