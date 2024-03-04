import React from "react";
import Select from "../atom/Select";

interface FilterSelectProps {
  selectedFilter: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterSelect({ selectedFilter, handleSelectChange }: FilterSelectProps) {
  return (
    <Select name="filter-select" size="small" selectedValue={selectedFilter} handleSelectChange={handleSelectChange}>
      <Select.Option value="제목" />
      <Select.Option value="내용" />
    </Select>
  );
}
