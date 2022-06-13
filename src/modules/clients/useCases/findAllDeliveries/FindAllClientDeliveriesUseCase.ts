import { prisma } from "../../../../database/prismaClient";

class FindAllClientDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: client_id
      },
      select: {
        deliveries: true
      }
    });

    return deliveries;
  }
}

export { FindAllClientDeliveriesUseCase }