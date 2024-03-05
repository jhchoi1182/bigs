import Icon from "@/components/base/Icon";
import React from "react";
import styled from "styled-components";

interface ArrowIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isNext?: boolean;
}

export default function ArrowIcon({ isNext, ...props }: ArrowIconProps) {
  return (
    <Arrow $isNext={isNext} {...props}>
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 21H13M13 21L20 28M13 21L20 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 41C32.0456 41 41 32.0456 41 21C41 9.9543 32.0456 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0456 9.9543 41 21 41Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Arrow>
  );
}

const Arrow = styled(Icon)<{ $isNext?: boolean }>`
  transform: ${({ $isNext }) => ($isNext ? "rotate(180deg)" : "")};
`;
