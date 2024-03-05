import React from "react";
import Select from "../atom/Select";
import { observer } from "mobx-react-lite";
import { newsOrder } from "@/stores/newsOrderStore";

export default observer(function NewsOrderSelect() {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    newsOrder.setSelectedValue(event.target.value);
  };

  return (
    <Select label="정렬" size="mid" name="order-select" selectedValue={newsOrder.selectedValue} handleSelectChange={handleSelectChange}>
      <Select.Option value="최신순" />
      <Select.Option value="오래된 순" />
    </Select>
  );
});
