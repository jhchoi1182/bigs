import { makeAutoObservable } from "mobx";

class Loading {
  isFetching = true;
  isOrderSelectLoading = true;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsFetching(value: boolean) {
    this.isFetching = value;
  }
  setIsOrderSelectLoading(value: boolean) {
    this.isOrderSelectLoading = value;
  }
  setIsError(value: boolean) {
    this.isError = value;
  }
}

export const loadingStore = new Loading();
