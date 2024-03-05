import { makeAutoObservable } from "mobx";

class Pagination {
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(value: number) {
    this.currentPage = value;
  }
  goToPreviousPage() {
    if (this.currentPage === 1) return;
    this.currentPage -= 1;
  }
  goToNextPage() {
    if (this.currentPage === 10) return;
    this.currentPage += 1;
  }
}

export const pagination = new Pagination();
