import { Product } from "../models/Product";
import { VendingMachine } from "../models/VendingMachine";
import { VendingState } from "./VendingState";
import { PaymentState } from "./PaymentState";
import { IdleState } from "./IdleState";

export class ProductSelectedState implements VendingState {
  selectProduct(machine: VendingMachine, product: Product) {
    if (product.quantity <= 0) {
      throw new Error("Product is out of stock");
    }

    machine.setSelectedProduct(product);
  }

  insertMoney(machine: VendingMachine, amount: number) {
    machine.addMoney(amount);
    machine.setState(new PaymentState());
  }

  purchase() {
    throw new Error("Please insert money first");
  }

  cancel(machine: VendingMachine) {
    machine.setSelectedProduct(null);
    machine.setState(new IdleState());
  }
}
