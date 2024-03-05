import React from "react";
import styled from "styled-components";
import NewsOrderSelector from "../elements/NewsOrderSelect";
import SearchBar from "../elements/SearchBar";

export default function TopToolbar() {
  return (
    <ToolbarSection>
      <NewsOrderSelector />
      <SearchBar />
    </ToolbarSection>
  );
}

const ToolbarSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
