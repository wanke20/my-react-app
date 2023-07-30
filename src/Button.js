import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.buttoncolor || "transparent"};
  border: 4px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px;
`;

export const Button = ({ children, buttoncolor, ...props }) => (
  <StyledButton buttoncolor={buttoncolor} {...props}>{children}</StyledButton>
);

export const DangerButton = ({ children, ...props }) => (
    <Button buttoncolor="red" {...props}>{children}</Button>
)

export const SuccessButton = ({ children, ...props }) => (
    <Button buttoncolor="green" {...props}>{children}</Button>
)