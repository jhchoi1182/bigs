import React, { useState } from "react";
import FilterSelect from "../molecules/FilterSelect";
import styled from "styled-components";

export default function SearchBar() {
  const [selectedFilter, setSelectedFilter] = useState("제목");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  console.log(selectedFilter);

  return (
    <SearchBarBox>
      <form>
        <FilterSelect selectedFilter={selectedFilter} handleSelectChange={handleSelectChange} />
      </form>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  align-self: flex-end;
`;
