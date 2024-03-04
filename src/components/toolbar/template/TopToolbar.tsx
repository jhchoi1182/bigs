import React from "react";
import styled from "styled-components";
import NewsOrderSelector from "../molecules/NewsOrderSelector";

export default function TopToolbar() {
  return (
    <ToolbarSection>
      <NewsOrderSelector />
    </ToolbarSection>
  );
}

const ToolbarSection = styled.section`
  margin-bottom: 5rem;
`;
