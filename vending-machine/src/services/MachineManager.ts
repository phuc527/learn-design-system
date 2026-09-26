import { VendingMachine } from "../models/VendingMachine";

export class MachineManager {
  private machines = new Map<string, VendingMachine>();

  addMachine(machineId: string) {
    if (this.machines.has(machineId)) {
      throw new Error("Machine already exists");
    }

    this.machines.set(machineId, new VendingMachine());
  }

  getMachine(machineId: string) {
    const machine = this.machines.get(machineId);

    if (!machine) {
      throw new Error("Machine not found");
    }

    return machine;
  }
}
