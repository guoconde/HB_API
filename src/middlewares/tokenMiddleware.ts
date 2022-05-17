import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { unauthorizedError } from '../utils/errorUtils.js';

export async function tokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) throw unauthorizedError();

  const [, token] = authorization.split(' ');

  const isAuthorized = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!isAuthorized) throw unauthorizedError();

  next();
}
