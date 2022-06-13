import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Invalid username and/or password!");
    }

    const passwordMatches = await compare(password, client.password);

    if (!passwordMatches) {
      throw new Error("Invalid username and/or password!");
    }

    const token = sign({ username }, "65544e71b81c8db5e9dc4a76626b1b80", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateClientUseCase }