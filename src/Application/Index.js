import React, { Component } from "react";
import "./App.css";
import Greeting from "./Greeting";
import styled, {css} from "styled-components";

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
  color: palevioletred;
  `}
`

const TomatoButton = styled(MyButton)`
color: tomato;
border-color: tomato;
`;

function App() {
  return (
    <div> 
      <Greeting />
      <MyButton>Hello</MyButton>
      <MyButton primary>Hello</MyButton>
      <TomatoButton>Tomato</TomatoButton>
    </div>

  );
}

export default App;
