// rate limiter is used for the limit the authentication
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  skipSuccessfulRequests: true,
});

module.exports = {
  authLimiter,
};
