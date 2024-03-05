import React from "react";
import styled, { keyframes, css } from "styled-components";

const changeColor = keyframes`
  0%, 25%, 100% { background-color: #D9D9D9; }
  12.5% { background-color: #2D2D2D; }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
`;

const Circle = styled.div<{ $index: number; $circleCount: number }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d9d9d9;
  border-radius: 9999px;
  position: absolute;
  animation: ${css`
    ${changeColor} 0.8s steps(1, end) infinite
  `};
  ${({ $index, $circleCount }) => css`
    transform: rotate(${(360 / $circleCount) * $index - 90}deg) translate(30px);
    animation-delay: ${$index * 0.1}s;
  `}
`;

export default function LoadingSpinner() {
  const circleCount = 8;

  return (
    <SpinnerContainer>
      {Array.from({ length: circleCount }).map((_, index) => (
        <Circle key={index} $index={index} $circleCount={circleCount} />
      ))}
    </SpinnerContainer>
  );
}
