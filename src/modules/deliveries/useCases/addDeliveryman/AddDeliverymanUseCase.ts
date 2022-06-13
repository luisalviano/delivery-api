import { prisma } from "../../../../database/prismaClient";

interface IAddDeliveryman {
  delivery_id: string;
  deliveryman_id: string;
}

class AddDeliverymanUseCase {
  async execute({ delivery_id, deliveryman_id }: IAddDeliveryman) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: delivery_id
      },
      data: {
        deliveryman_id
      }
    });

    return delivery;
  }
}

export { AddDeliverymanUseCase }