import Joi from "joi";
export const schema = Joi.object().keys({
  _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  password: Joi.string().regex(/^.{8,}$/),
});
