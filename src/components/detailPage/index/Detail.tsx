"use client";

import Button from "@/components/base/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import getArticleController from "@/controller/getArticleController";
import { loadingStore } from "@/stores/loadingStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default observer(function Article({ title }: { title: string }) {
  const [article, setArticle] = useState({
    title: "",
    description: "",
    link: "",
    originallink: "",
    pubDate: "",
  });

  const { fetchArticle } = getArticleController();
  useEffect(() => {
    fetchArticle(title, setArticle);
  }, []);

  return (
    <DetailWrapper>
      {loadingStore.isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <DetailSection>
            <Headline>
              <Title>
                <h1>{article?.title ?? "내용 없음"}</h1>
              </Title>
              <Time>
                <time>{article?.pubDate ?? "내용 없음"}</time>
              </Time>
            </Headline>
            <hr />
            <Description>
              <article>{article?.description ?? "내용 없음"}</article>
              <LinkTag>
                <span>링크: </span>
                <a href={article?.link} rel="noopener noreferrer" target="_blank">
                  {article?.link ?? "내용 없음"}
                </a>
              </LinkTag>
            </Description>
          </DetailSection>
          <Link href={"/"}>
            <HomeButton size="big">홈으로</HomeButton>
          </Link>
        </>
      )}
    </DetailWrapper>
  );
});

const DetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DetailSection = styled.section`
  width: 50%;
  height: 50rem;
  min-height: 50rem;
  padding: 5rem;
  border: 1px solid;
  margin-bottom: 3rem;
  overflow: auto;
  hr {
    height: 1px;
    background-color: black;
  }
`;

const Headline = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  font-size: 4rem;
  line-height: 6rem;
`;

const Time = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.8rem;
`;

const HomeButton = styled(Button)`
  color: var(--river);
  border: 2px solid;
`;

const Description = styled.div`
  margin-top: 3rem;
  article {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

const LinkTag = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  gap: 1rem;
`;
