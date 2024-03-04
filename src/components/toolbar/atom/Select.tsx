import React, { cloneElement } from "react";
import styled from "styled-components";

interface SelectProps {
  label?: string;
  selectedValue: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export default function Select({ label, selectedValue, handleSelectChange, children }: SelectProps) {
  return (
    <SelectBox>
      {label && <label htmlFor={label}>{label}</label>}
      <select id={label ?? "sort-search"} value={selectedValue} onChange={handleSelectChange}>
        {children}
      </select>
    </SelectBox>
  );
}

Select.Option = function SelectOption({ value }: { value: string }) {
  return <option value={value}>{value}</option>;
};

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  select {
    padding: 0.5rem;
    width: 20rem;
    height: 4rem;
    font-size: 1.5rem;
  }
`;
