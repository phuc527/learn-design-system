import { VendingMachine } from "../models/VendingMachine";
import { VendingState } from "./VendingState";
import { IdleState } from "./IdleState";

export class DispensingState implements VendingState {
  selectProduct() {
    throw new Error("Machine is dispensing");
  }

  insertMoney() {
    throw new Error("Machine is dispensing");
  }

  purchase(machine: VendingMachine) {
    const product = machine.getSelectedProduct();

    if (!product) {
      throw new Error("No product selected");
    }

    product.quantity--;

    const change = machine.getInsertedMoney() - product.price;

    console.log(`Dispensed: ${product.name}`);
    console.log(`Change: ${change}`);

    machine.resetMoney();
    machine.setSelectedProduct(null);
    machine.setState(new IdleState());
  }

  cancel() {
    throw new Error("Cannot cancel while dispensing");
  }
}
