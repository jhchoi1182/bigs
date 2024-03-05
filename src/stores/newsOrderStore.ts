import { makeAutoObservable } from "mobx";

class NewsOrder {
  selectedValue = "최신순";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedValue(value: string) {
    this.selectedValue = value;
  }

  getSelectedValue() {
    return this.selectedValue === "최신순" ? "desc" : "asc";
  }
}

export const newsOrder = new NewsOrder();
