import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCase } from "./FindAllClientDeliveriesUseCase";

class FindAllClientDeliveriesController {
  async handle(request: Request, response: Response) {
    const { client_id } = request;

    const findAllDeliveriesUseCase = new FindAllClientDeliveriesUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(client_id);

    return response.json(deliveries);
  }
}

export { FindAllClientDeliveriesController }