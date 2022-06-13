import { Request, Response } from "express";
import { FindUnfinishedDeliveriesUseCase } from "./FindUnfinishedDeliveriesUseCase";

class FindUnfinishedDeliveriesController {
  async handle(request: Request, response: Response) {
    const findUnfinishedDeliveriesUseCase = new FindUnfinishedDeliveriesUseCase();

    const deliveries = await findUnfinishedDeliveriesUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindUnfinishedDeliveriesController }