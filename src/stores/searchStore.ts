import { makeAutoObservable } from "mobx";

class Search {
  searchKeyword = "";
  filterValue = "제목";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchKeyword(value: string) {
    this.searchKeyword = value;
    sessionStorage.setItem("searchKeyword", value);
  }
  setFilterValue(value: string) {
    this.filterValue = value;
    sessionStorage.setItem("filterValue", value);
  }

  getFilterValue() {
    return this.filterValue === "제목" ? "title" : "desc";
  }
}

export const searchValueStore = new Search();
