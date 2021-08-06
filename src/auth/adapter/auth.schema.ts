import Joi from 'joi';

// Validate password contains at least 10 characters, one lowercase letter, one uppercase letter and one of the following characters: !, @, #, ? or ]. '^(?=.*[a-z])(?=.*[A-Z])[0-9](?=.*[!@#?]]){10,30}$'
// Short password contains '^[a-zA-Z0-9]{3,30}$'
export const schemas = {
  LOGIN: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9!@#?]{3,30}$'))
        .required(),
    }),
  },
  REFRESH_TOKEN: {
    params: Joi.object({
      refreshToken: Joi.string().required(),
    }),
  },
};
