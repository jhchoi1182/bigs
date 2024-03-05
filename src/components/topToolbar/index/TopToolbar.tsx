"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../elements/SearchBar";
import { observer } from "mobx-react-lite";
import { loadingStore } from "@/stores/loadingStore";
import NewsOrderSelector from "../elements/NewsOrderSelect";

export default observer(function TopToolbar() {
  useEffect(() => {
    loadingStore.setIsOrderSelectLoading(false);
  }, []);

  return (
    <ToolbarSection>
      <NewsOrderSelector />
      <SearchBar />
    </ToolbarSection>
  );
});

const ToolbarSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
