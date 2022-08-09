/** ***************** package Import ******************************************************** */

const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
/** ***************** ApiError from utils folder ******************************************************** */

const ApiError = require("../utils/ApiError");

/** ***************** Import roleRights from config/roles  ************************************************** */

const { jwtStrategy } = require("../config/passport");

/*
function verifyCallback - This function is used to verify the user is aunthenticated or not and verify
                          the role of an user for accessing

*/

const verifyCallback =
  (req, resolve, reject, requiredRights) => async (err, user, info) => {
    // console.log(err, user, info, "..");
    // if (err || info || !user) {
    //   return reject(
    //     new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
    //   );
    // }

    req.user = user;
    let token = req.get("authorization").split(" ")[1];
    let payload;
    try {
      payload = jwt.verify(token, "FSMovies2021", (err, res) => {
        if (err) {
          return reject(
            new ApiError(httpStatus.UNAUTHORIZED, "Provied a valid token")
          );
        }
        return res;
      });
    } catch (err) {
      console.log(err, "err");
    }
    if (payload) {
      console.log(payload, "2");
      payload.name !== "FSMovies2021"
        ? reject(new ApiError(httpStatus.UNAUTHORIZED, "Provied a valid key"))
        : resolve();
    }

    return resolve();
  };

/*
function auth - This function receive an required rights from the auth.route.js from the route\v1

*/

const auth =
  (...requiredRights) =>
  async (req, res, next) =>
    new Promise((resolve, reject) => {
      verifyCallback(req, resolve, reject, requiredRights)(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));

// exporting the auth function
module.exports = auth;
