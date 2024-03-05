import React from "react";
import styled from "styled-components";

export default function NoResult() {
  return <NoResultDiv>검색 결과 없음</NoResultDiv>;
}

const NoResultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
`;
