/*
   controller Name : Auth
*/

/** ******************  Import httpStatus and catchAsync(from utils) ******************************************************** */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
/** *****************  Import Services required for Auth api ******************************************************** */
const { tokenService } = require("../services");

// Register function is used to register the new user
const getToken = catchAsync(async (req, res) => {
  const tokens = await tokenService.generateAuthTokens();
  res.status(httpStatus.CREATED).send({ user, tokens });
});

// export all the controller to use in routes
module.exports = {
  getToken,
};
