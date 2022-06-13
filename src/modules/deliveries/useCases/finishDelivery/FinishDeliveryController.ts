import { Request, Response } from "express";
import { FinishDeliveryUseCase } from "./FinishDeliveryUseCase";

class FinishDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id } = request.params;

    const finishDeliveryUseCase = new FinishDeliveryUseCase();
    const delivery = await finishDeliveryUseCase.execute({
      delivery_id: id,
      deliveryman_id
    });

    return response.json(delivery);
  }
}

export { FinishDeliveryController }