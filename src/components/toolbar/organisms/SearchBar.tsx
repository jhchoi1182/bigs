import React, { useState } from "react";
import FilterSelect from "../molecules/FilterSelect";
import styled from "styled-components";
import Input, { useInput } from "../atom/Input";

export default function SearchBar() {
  const [selectedFilter, setSelectedFilter] = useState("제목");
  const [searchKeyword, input] = useInput({ isIcon: true, id: "search-input", placeholder: "검색어를 입력해주세요." });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <SearchBarBox>
      <FormBox>
        <FilterSelect selectedFilter={selectedFilter} handleSelectChange={handleSelectChange} />
        {input}
      </FormBox>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  align-self: flex-end;
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;
  gap: 5%;
  ${Input} {
    width: 40rem;
    height: 3rem;
    background-color: var(--silver);
  }
`;
