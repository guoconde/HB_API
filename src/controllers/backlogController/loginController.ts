/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginSchema } from '../../schemas/loginSchema.js';
import * as loginRepository from '../../repositories/backlogRepositories/loginRepository.js';
import { unauthorizedError, wrongSchemaError } from '../../utils/errorUtils.js';

export async function login(req: Request, res: Response) {
  // eslint-disable-next-line prefer-const
  let { user, password } = req.body;
  const validation = loginSchema.validate(req.body);

  if (validation.error) throw wrongSchemaError();

  const dbUser = await loginRepository.findUser(user);

  if (!dbUser) throw unauthorizedError();

  const passValidate = bcrypt.compareSync(password, dbUser.password);

  if (!passValidate) throw unauthorizedError();

  const token = jwt.sign(dbUser, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return res.send({ token });
}
