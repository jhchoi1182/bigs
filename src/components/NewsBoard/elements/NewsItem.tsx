import { NewsItem } from "@/type/newsData";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface NewsItemProps {
  index: number;
  item: NewsItem;
}

export default function NewsItem({ index, item }: NewsItemProps) {
  return (
    <NewsList index={index}>
      <div className="title">
        <Link href={``}>{item.title}</Link>
      </div>
      <span className="time">{item.pubDate}</span>
    </NewsList>
  );
}

export const NewsList = styled.li<{ index?: number }>`
  display: flex;
  align-items: center;
  height: calc(100% / 11);
  border-bottom: ${({ index }) => (index === 9 ? "none" : "1px solid")};
  margin-bottom: -0.1rem;

  .title {
    width: 85%;
    text-align: center;
  }
  .time {
    width: 15%;
    text-align: center;
  }
`;
