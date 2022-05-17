import joi from 'joi';
import { UserData } from '../services/backlogServices.js';

export const loginSchema = joi.object<UserData>({
  user: joi.string().required(),
  password: joi.string().required(),
});
