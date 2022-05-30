import React from "react";
import styled, { css } from "styled-components";

const Cir = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${({ color }) => color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function Circle() {
  return <Cir color="red" huge />;
}

export default Circle;
