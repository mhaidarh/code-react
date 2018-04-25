import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: black;
`;

const ContentStyled = () => {
  return <Button style={{ backgroundColor: "black" }}>Styled Button</Button>;
};

export default ContentStyled;
