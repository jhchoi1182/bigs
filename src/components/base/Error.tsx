import React from "react";
import styled from "styled-components";

interface ErrorProps {
  height: string;
}

export default function Error({ height }: ErrorProps) {
  return <ErrorSection height={height}>에러 발생!</ErrorSection>;
}

const ErrorSection = styled.section<ErrorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  color: red;
  font-weight: 700;
  font-size: 2rem;
`;
