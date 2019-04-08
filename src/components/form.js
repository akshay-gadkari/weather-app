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
color: #2F4F4F;
background: white;
font-size: 15px;
border-radius: 5px;
border: 2px solid #2F4F4F;
&:hover {
background: #2F4F4F;
color: white;
}
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
