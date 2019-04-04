import React from 'react';
import styled from "styled-components";

let Title = styled.h1`
color: white;
`;

let TitleDiv = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
`;

const Titles = (props) =>{
    return (
	<div>
          <TitleDiv>
	    <Title>US Weather</Title>
	  </TitleDiv>
	</div>
    );
};

export default Titles;
