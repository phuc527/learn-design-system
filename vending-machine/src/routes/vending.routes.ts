import { Router } from "express";
import { MachineManager } from "../services/MachineManager";
import { VendingController } from "../controllers/vending.controller";

const router = Router();

const manager = new MachineManager();

manager.addMachine("machine-a");
manager.addMachine("machine-b");
manager.addMachine("machine-c");

router.get("/machines/:machineId/products", (req, res) => {
  try {
    const machine = manager.getMachine(req.params.machineId);

    res.json({
      data: machine.getProducts(),
    });
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
});

router.post("/machines/:machineId/select", (req, res) => {
  try {
    const machine = manager.getMachine(req.params.machineId);

    const controller = new VendingController(machine);

    controller.selectProduct(req, res);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
});

router.post("/machines/:machineId/insert-money", (req, res) => {
  try {
    const machine = manager.getMachine(req.params.machineId);

    const controller = new VendingController(machine);

    controller.insertMoney(req, res);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
});

router.post("/machines/:machineId/purchase", (req, res) => {
  try {
    const machine = manager.getMachine(req.params.machineId);

    const controller = new VendingController(machine);

    controller.purchase(req, res);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
});

router.post("/machines/:machineId/cancel", (req, res) => {
  try {
    const machine = manager.getMachine(req.params.machineId);

    const controller = new VendingController(machine);

    controller.cancel(req, res);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
});

export default router;
