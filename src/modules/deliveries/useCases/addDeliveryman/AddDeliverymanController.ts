import { Request, Response } from "express";
import { AddDeliverymanUseCase } from "./AddDeliverymanUseCase";

class AddDeliverymanController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id } = request.params;

    const addDeliverymanUseCase = new AddDeliverymanUseCase();
    const delivery = await addDeliverymanUseCase.execute({
      delivery_id: id,
      deliveryman_id
    });

    return response.json(delivery);
  }
}

export { AddDeliverymanController }