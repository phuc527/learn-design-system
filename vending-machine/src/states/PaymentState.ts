import { Product } from "../models/Product";
import { VendingMachine } from "../models/VendingMachine";
import { VendingState } from "./VendingState";
import { DispensingState } from "./DispensingState";
import { IdleState } from "./IdleState";

export class PaymentState implements VendingState {
  selectProduct(machine: VendingMachine, product: Product) {
    throw new Error("Cannot change product while paying");
  }

  insertMoney(machine: VendingMachine, amount: number) {
    machine.addMoney(amount);
  }

  purchase(machine: VendingMachine) {
    const product = machine.getSelectedProduct();

    if (!product) {
      throw new Error("No product selected");
    }

    const money = machine.getInsertedMoney();

    if (money < product.price) {
      throw new Error(
        `Insufficient money. Required: ${product.price}, inserted: ${money}`,
      );
    }

    machine.setState(new DispensingState());

    machine.purchase();
  }

  cancel(machine: VendingMachine) {
    const refund = machine.getRefund();

    machine.setSelectedProduct(null);
    machine.setState(new IdleState());

    console.log(`Refund: ${refund}`);
  }
}
