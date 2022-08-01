import { observable, action, makeObservable } from "mobx";

export class ProductStoreImpl {
  @observable pageNumber: number = 1;
  @observable searchValue: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  setPageNumber(n: number): void {
    this.pageNumber = n;
  }

  @action
  setSearchValue(val: string): void {
    this.searchValue = val;
  }
}

export const ProductStore = new ProductStoreImpl();
