"use client";

import React from "react";
import styled from "styled-components";
import SearchBar from "../elements/SearchBar";
import dynamic from "next/dynamic";
import { loadingStore } from "@/stores/loadingStore";
import { observer } from "mobx-react-lite";
const NewsOrderSelector = dynamic(() => import("../elements/NewsOrderSelect"), { ssr: false });

export default observer(function TopToolbar() {
  return (
    <ToolbarSection>
      {loadingStore.isOrderSelectLoading && <div>로딩중..</div>}
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
