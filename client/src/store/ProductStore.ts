import { observable, action, makeObservable } from "mobx";
import { data } from "assets/test/data/popularProduct";

export class ProductStoreImpl {
  @observable pageNumber: number = 1;
  @observable searchValue: string = "";
  @observable productId: number = 0;

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

  @action
  setProductId(id: number) {
    this.productId = id;
  }

  @action
  find_product() {
    const data_list = data.filter((item) => item.id === this.productId);
    if (data_list) return data_list[0];
  }
}

export const ProductStore = new ProductStoreImpl();
