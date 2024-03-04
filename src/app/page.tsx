"use client";

import NewsBoard from "@/components/NewsBoard/NewsBoard";
import TopToolbar from "@/components/toolbar/template/TopToolbar";

export default function Home() {
  return (
    <main>
      <TopToolbar />
      <NewsBoard />
    </main>
  );
}
