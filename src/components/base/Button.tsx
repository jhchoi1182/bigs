import React from "react";
import styled from "styled-components";

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "mid" | "big";
}

export default function Button({ children, ...props }: ButtonProp) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

const sizes = {
  mid: {
    width: "8rem",
    height: "4rem",
  },
  big: {
    width: "12rem",
    height: "8rem",
  },
};

const ButtonStyle = styled.button<ButtonProp>`
  ${({ size }) => sizes[size]}
  font-size: 1.6rem;
  border: 1px solid;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;
