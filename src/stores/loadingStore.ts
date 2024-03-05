import { makeAutoObservable } from "mobx";

class Loading {
  isFetching = true;
  isOrderSelectLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsFetching(value: boolean) {
    this.isFetching = value;
  }
  setIsOrderSelectLoading(value: boolean) {
    this.isOrderSelectLoading = value;
  }
}

export const loadingStore = new Loading();
