import { prisma } from "../../../../database/prismaClient";

interface IFinishDelivery {
  delivery_id: string;
  deliveryman_id: string;
}

class FinishDeliveryUseCase {
  async execute({ delivery_id, deliveryman_id }: IFinishDelivery) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id
      },
      data: {
        end_at: new Date()
      }
    });

    return delivery;
  }
}

export { FinishDeliveryUseCase }