import Joi from '@hapi/joi';

const baseSchema = Joi.object({
  //for login
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required()
});

const createSchema = baseSchema.keys({
  name: Joi.string().required(),
  confirmPassword: Joi.valid(Joi.ref('password')).required(),
  role: Joi.string().valid('admin', 'user')
});

export { createSchema, baseSchema };
