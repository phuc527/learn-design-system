import type { Product } from "../models/Product";
import { VendingMachine } from "../models/VendingMachine";

export interface VendingState {
  selectProduct(machine: VendingMachine, product: Product): void;

  insertMoney(machine: VendingMachine, amount: number): void;

  purchase(machine: VendingMachine): void;

  cancel(machine: VendingMachine): void;
}
