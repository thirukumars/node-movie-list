/*
   validation Name : movies
*/

/** ***************** package  Import ******************************************************** */

const Joi = require("joi");

/*
function getMovies - This function is used to validate movies inputs

*/
const getMoviess = {
  query: Joi.object().keys({
    _id: Joi.string(),
    moviesName: Joi.string(),
    search: Joi.string(),
    role: Joi.string(),
    pcp: Joi.boolean(),
    mobileNumber: Joi.string(),
    specialty: Joi.string(),
    pager: Joi.string(),
    isLoggedIn: Joi.boolean(),
    fax: Joi.string(),
    officePhone: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    title: Joi.string().allow(""),
    notes: Joi.string().allow(""),
  }),
};

// exporting all the functions

module.exports = {
  getMoviess,
};
