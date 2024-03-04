import React from "react";
import styled, { css } from "styled-components";

interface StyleProps {
  size: "small" | "mid";
}
interface SelectProps extends StyleProps {
  label?: string;
  name: string;
  selectedValue: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export default function Select({ label, name, size, selectedValue, handleSelectChange, children }: SelectProps) {
  const styles = { size };

  return (
    <SelectBox {...styles}>
      {label && <label htmlFor={label}>{label}</label>}
      <select id={label ?? name} name={name} value={selectedValue} onChange={handleSelectChange}>
        {children}
      </select>
    </SelectBox>
  );
}

Select.Option = function SelectOption({ value }: { value: string }) {
  return <option value={value}>{value}</option>;
};

const small = css`
  width: 10rem;
`;
const mid = css`
  width: 20rem;
`;
const sizes = { small, mid };

const SelectBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  select {
    height: 4rem;
    ${({ size }) => sizes[size]}
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;
