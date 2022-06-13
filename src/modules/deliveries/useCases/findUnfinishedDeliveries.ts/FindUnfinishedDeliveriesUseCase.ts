import { prisma } from "../../../../database/prismaClient";

class FindUnfinishedDeliveriesUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null
      }
    });

    return deliveries;
  }
}

export { FindUnfinishedDeliveriesUseCase }