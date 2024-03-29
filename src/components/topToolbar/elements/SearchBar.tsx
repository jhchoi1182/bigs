import React, { FormEvent, useEffect, useState } from "react";
import FilterSelect from "./FilterSelect";
import styled from "styled-components";
import Input, { useInput } from "../../base/Input";
import Button from "@/components/base/Button";
import getNewsController from "@/controller/getNewsController";
import { searchValueStore } from "@/stores/searchStore";

export default function SearchBar() {
  const [selectedFilter, setSelectedFilter] = useState("제목");
  const { value, input, setValue } = useInput({ isIcon: true, id: "search-input", placeholder: "검색어를 입력해주세요." });
  const { fetchNews } = getNewsController();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    searchValueStore.setSearchKeyword(value);
    fetchNews();
  };

  useEffect(() => {
    setValue(sessionStorage.getItem("searchKeyword") ?? "");
  }, []);

  return (
    <SearchBarBox>
      <FormBox onSubmit={handleSubmit}>
        <FilterSelect selectedFilter={selectedFilter} handleSelectChange={handleSelectChange} />
        {input}
        <SubmitButton size="mid">검색</SubmitButton>
      </FormBox>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  align-self: flex-end;
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${Input} {
    width: 40rem;
    height: 3rem;
    padding-right: 4rem;
    background-color: var(--silver);
  }
`;

const SubmitButton = styled(Button)`
  background-color: var(--mouse-gray);
  color: aliceblue;
`;
