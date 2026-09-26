import { Product } from "../models/Product";
import { VendingMachine } from "../models/VendingMachine";
import { VendingState } from "./VendingState";
import { ProductSelectedState } from "./ProductSelectedState";

export class IdleState implements VendingState {
  selectProduct(machine: VendingMachine, product: Product) {
    if (product.quantity <= 0) {
      throw new Error("Product is out of stock");
    }

    machine.setSelectedProduct(product);
    machine.setState(new ProductSelectedState());
  }

  insertMoney() {
    throw new Error("Please select a product first");
  }

  purchase() {
    throw new Error("Please select a product first");
  }

  cancel() {
    throw new Error("Nothing to cancel");
  }
}
