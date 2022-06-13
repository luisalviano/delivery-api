import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureDeliverymanAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Missing authentication token!"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "65544e71b81c8db5e9dc4a73326b1b80") as IPayload;

    request.deliveryman_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid authentication token!"
    });
  }
}