import Joi from 'joi';

const paramId = Joi.object({
  id: Joi.number().required(),
});

export const schemas = {
  LIST_ONE: {
    params: paramId,
  },
  LIST_BY_PAGE: {
    params: Joi.object({
      page: Joi.number().min(0).required(),
    }),
  },
  LIST_AGENTS_BY_USER: {
    params: paramId,
  },
  INSERT: {
    body: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      idcard: Joi.string().required(),
      user: Joi.number().required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
