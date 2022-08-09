/*
   validation Name : auth
*/

/** ***************** Models Import ******************************************************** */
const Joi = require('joi');
const { password } = require('./custom.validation');

// register is used to register the user
const register = {
  body: Joi.object().keys({
    _id: Joi.string(),
    personalEmail: Joi.string().email().allow(''),
    workEmail: Joi.string().email().allow(''),
    password: Joi.string().custom(password),
    role: Joi.string().allow(''),
    firstName: Joi.string(),
    middleName: Joi.string().allow(''),
    lastName: Joi.string(),
    preferredName: Joi.string().allow(''),
    professionalTitle: Joi.string().allow(''),
    dob: Joi.date(),
    prgEmployeeId: Joi.string().allow(''),
    employmentStatus: Joi.string(),
    terminationDate: Joi.date(),
    mobileNumber: Joi.string().allow(''),
    telmediqNumber: Joi.string().allow(''),
    preferredPhone: Joi.string().allow(''),
    street: Joi.string().allow(''),
    city: Joi.string().allow(''),
    state: Joi.string().allow(''),
    location: Joi.string().allow(''),
    specialty: Joi.string().allow(''),
    pager: Joi.string().allow(''),
    isActive: Joi.boolean().allow(''),
  }),
};

// login the user
const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

// logout is used to logout the user
const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

// refreshTokens
const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

// forgotPassword is used to get the token to reset the password
const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

// reset password with new password
const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

// export all the functions
module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
};
