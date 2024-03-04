import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

export default observer(function NewsBoard() {
  return <NewsBoardSection>NewsBoard</NewsBoardSection>;
});

const NewsBoardSection = styled.section`
  height: 80%;
`;
