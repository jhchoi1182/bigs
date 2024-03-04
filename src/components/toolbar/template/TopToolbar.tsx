import React from "react";
import styled from "styled-components";
import NewsOrderSelector from "../molecules/NewsOrderSelect";
import SearchBar from "../organisms/SearchBar";

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
