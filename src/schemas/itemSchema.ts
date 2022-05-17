import joi from 'joi';
import { ItemData } from '../services/backlogServices.js';

export const itemSchema = joi.object<ItemData>({
  name: joi.string().required(),
  picture: joi.string(),
  description: joi.string().required(),
  price: joi.number().precision(2).required(),
  avaliable: joi.boolean().required(),
  type: joi.string().required(),
});
