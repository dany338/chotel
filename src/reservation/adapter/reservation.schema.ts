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
      room: Joi.number().min(0).required(),
    }),
  },
  SEARCH_BY_NAME: {
    body: Joi.object({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      room: Joi.number().required(),
    }),
  },
  GET_VALIDATION: {
    params: paramId,
  },
  INSERT: {
    body: Joi.object({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      room: Joi.number().required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      room: Joi.number().required(),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
