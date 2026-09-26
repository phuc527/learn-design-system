import { Product } from "./Product";
import { VendingState } from "../states/VendingState";
import { IdleState } from "../states/IdleState";
import { products } from "../data/products";

export class VendingMachine {
  private state: VendingState;

  private selectedProduct: Product | null = null;

  private insertedMoney = 0;

  constructor() {
    this.state = new IdleState();
  }

  setState(state: VendingState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  getProducts() {
    return products;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  setSelectedProduct(product: Product | null) {
    this.selectedProduct = product;
  }

  getInsertedMoney() {
    return this.insertedMoney;
  }

  addMoney(amount: number) {
    this.insertedMoney += amount;
  }

  resetMoney() {
    this.insertedMoney = 0;
  }

  selectProduct(productId: string) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
      throw new Error("Product not found");
    }

    this.state.selectProduct(this, product);
  }

  insertMoney(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.state.insertMoney(this, amount);
  }

  purchase() {
    this.state.purchase(this);
  }

  cancel() {
    this.state.cancel(this);
  }

  getRefund() {
    const refund = this.insertedMoney;
    this.insertedMoney = 0;

    return refund;
  }
}
