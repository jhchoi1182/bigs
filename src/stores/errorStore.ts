import { makeAutoObservable } from "mobx";

class Error {
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsError(value: boolean) {
    this.isError = value;
  }
}

export const errorStore = new Error();
