import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) {
      throw new Error("Invalid username and/or password!");
    }

    const passwordMatches = await compare(password, deliveryman.password);

    if (!passwordMatches) {
      throw new Error("Invalid username and/or password!");
    }

    const token = sign({ username }, "65544e71b81c8db5e9dc4a73326b1b80", {
      subject: deliveryman.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase }