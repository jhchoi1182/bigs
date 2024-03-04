"use client";

import { myTimer } from "@/stores/test";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const Test = observer(() => {
  return (
    <>
      <Wrapper>
        <button onClick={() => myTimer.increaseTimer()}>
          <span>Seconds passed: {myTimer.secondsPassed}</span>;
        </button>
      </Wrapper>
    </>
  );
});

export default Test;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: teal;
`;
