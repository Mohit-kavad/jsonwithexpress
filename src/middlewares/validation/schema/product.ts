import Joi from "@hapi/joi";

const baseSchema = Joi.object({
  title: Joi.string().required(),
});

const createSchema = baseSchema.keys({
  price: Joi.number().required(),
  imageUrl: Joi.string().required(),
  description: Joi.string(),
});

export { createSchema };
