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
  LIST_RESERVATIONS_BY_ROOM: {
    params: Joi.object({
      agent: Joi.number().min(0).required(),
    }),
  },
  SEARCH_BY_NAME: {
    body: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      idcard: Joi.string().required(),
    }),
  },
  GET_VALIDATION: {
    params: paramId,
  },
  INSERT: {
    body: Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      idcard: Joi.string().required(),
      agent: Joi.number().required(),
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
