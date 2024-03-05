"use client";

import NewsBoard from "@/components/NewsBoard/index/NewsBoard";
import TopToolbarLoadingSpinner from "@/components/ui/TopToolbarLoadingSpinner";
import { loadingStore } from "@/stores/loadingStore";
import { observer } from "mobx-react-lite";
import dynamic from "next/dynamic";
import styled from "styled-components";
const TopToolbar = dynamic(() => import("@/components/topToolbar/index/TopToolbar"), { ssr: false });

export default observer(function Home() {
  return (
    <PageWrapper>
      {loadingStore.isOrderSelectLoading && <TopToolbarLoadingSpinner />}
      <TopToolbar />
      <NewsBoard />
    </PageWrapper>
  );
});

const PageWrapper = styled.main`
  width: 100%;
  min-width: 88rem;
  padding: 80px 10%;
`;
