import { newsApi } from "@/api/newsApi";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import styled from "styled-components";

export default observer(function NewsBoard() {
  useEffect(() => {
    const test = async () => {
      const data = await newsApi.get();
      console.log(data);
    };
    test();
  }, []);
  return <NewsBoardSection>NewsBoard</NewsBoardSection>;
});

const NewsBoardSection = styled.section`
  height: 80%;
`;
