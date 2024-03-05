import React from "react";
import Select from "../../base/Select";
import { observer } from "mobx-react-lite";
import { newsOrderStore } from "@/stores/newsOrderStore";
import getNewsController from "@/controller/getNewsController";

export default observer(function NewsOrderSelect() {
  const { fetchNews } = getNewsController();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    newsOrderStore.setSelectedValue(event.target.value);
    fetchNews();
  };

  return (
    <Select label="정렬" size="mid" name="order-select" selectedValue={newsOrderStore.selectedValue} handleSelectChange={handleSelectChange}>
      <Select.Option value="최신순" />
      <Select.Option value="오래된 순" />
    </Select>
  );
});
