import { Request, Response } from "express";
import { VendingMachine } from "../models/VendingMachine";

export class VendingController {
  constructor(private readonly machine: VendingMachine) {}

  getProducts = (req: Request, res: Response) => {
    res.json({
      data: this.machine.getProducts(),
    });
  };

  selectProduct = (req: Request, res: Response) => {
    try {
      const { productId } = req.body;

      this.machine.selectProduct(productId);

      res.json({
        message: "Product selected",
        product: this.machine.getSelectedProduct(),
      });
    } catch (error) {
      res.status(400).json({
        message: (error as Error).message,
      });
    }
  };

  insertMoney = (req: Request, res: Response) => {
    try {
      const { amount } = req.body;

      this.machine.insertMoney(amount);

      res.json({
        message: "Money inserted",
        insertedMoney: this.machine.getInsertedMoney(),
      });
    } catch (error) {
      res.status(400).json({
        message: (error as Error).message,
      });
    }
  };

  purchase = (req: Request, res: Response) => {
    try {
      this.machine.purchase();

      res.json({
        message: "Purchase completed",
      });
    } catch (error) {
      res.status(400).json({
        message: (error as Error).message,
      });
    }
  };

  cancel = (req: Request, res: Response) => {
    try {
      const refund = this.machine.getInsertedMoney();

      this.machine.cancel();

      res.json({
        message: "Transaction cancelled",
        refund,
      });
    } catch (error) {
      res.status(400).json({
        message: (error as Error).message,
      });
    }
  };
}
