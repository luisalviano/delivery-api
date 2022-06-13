import { Request, response, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "./FindAllDeliverymanDeliveriesUseCase";

class FindAllDeliverymanDeliveriesController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;

    const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase();
    const deliveries = await findAllDeliverymanDeliveriesUseCase.execute(deliveryman_id);

    return response.json(deliveries);
  }
}

export { FindAllDeliverymanDeliveriesController }