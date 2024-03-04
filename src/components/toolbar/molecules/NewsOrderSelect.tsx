import React from "react";
import Select from "../atom/Select";
import { newsOrder } from "@/stores/NewsOrderStore";
import { observer } from "mobx-react-lite";

export default observer(function NewsOrderSelect() {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    newsOrder.setSelectedValue(event.target.value);
  };

  return (
    <Select label="정렬" selectedValue={newsOrder.selectedValue} handleSelectChange={handleSelectChange}>
      <Select.Option value="최신순" />
      <Select.Option value="오래된 순" />
    </Select>
  );
});
