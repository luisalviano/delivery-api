import { prisma } from "../../../../database/prismaClient";

class FindAllDeliverymanDeliveriesUseCase {
  async execute(deliveryman_id: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: deliveryman_id
      },
      select: {
        deliveries: true
      }
    });

    return deliveries;
  }
}

export { FindAllDeliverymanDeliveriesUseCase }