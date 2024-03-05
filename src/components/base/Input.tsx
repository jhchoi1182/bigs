import Icon from "@/components/base/Icon";
import SearchIcon from "@/components/icons/SearchIcon";
import React, { useState } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isIcon?: boolean;
}

export function useInput({ isIcon, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const input = (
    <InputRelativeDiv>
      <Input value={value} onChange={(e) => setValue(e.target.value)} {...props} />
      {isIcon && <SearchIcon />}
    </InputRelativeDiv>
  );
  return { value, input, setValue };
}

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 10px;
`;
export default Input;

const InputRelativeDiv = styled.div`
  position: relative;
  ${Icon} {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }
`;
