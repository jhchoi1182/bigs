import { newsOrder } from "@/stores/NewsOrderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

export default observer(function NewsBoard() {
  console.log(newsOrder.selectedValue);

  return <div>NewsBoard</div>;
});

const NewsBoardSection = styled.section`
  
`