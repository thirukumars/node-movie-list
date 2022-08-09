/*
    Passport.js
*/

/** ***************** Models Import ******************************************************** */
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./index");

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    console.log(payload, "payload");
    if (payload.name !== "FSMovies2021") {
      throw new Error("Invalid token type");
    }
    // const user = await User.findById(payload.sub);
    // if (!user) {
    //   return done(null, false);
    // }
    done(null, "FSMovies2021");
  } catch (error) {
    done(error, false);
  }
};
const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
