/*
   controller Name : Movies
*/

/** ******************  Import httpStatus ******************************************************** */

const httpStatus = require("http-status");
/** ******************  Import pick,ApiError and catchAsync ******************************************************** */
const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");

/** ******************  Import Services ******************************************************** */
const { moviesService } = require("../services");

/*
function getMovies  -  This function is used to get an movies  based on specifie corematicaName and role
*/

const getMoviess = catchAsync(async (req, res) => {
  // console.log(req.query)
  const filter = pick(req.query, []);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await moviesService.queryMoviess(filter, options, req);
  res.send(result);
});
/*
exporting all the function using module exports
*/
module.exports = {
  getMoviess,
};
