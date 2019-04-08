import React from 'react';
import styled from "styled-components";

let FormDiv = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
`;

let Button = styled.button`
border: none;
margin-left: 5px;
width: 120px;
height: 35px;
overflow: visible;
color: white;
background: #985E6D;
font-size: 15px;
border-radius: 5px;
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
