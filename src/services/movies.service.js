/*
   Service Name : Moviess
*/

/** ***************** Models Import ****************************************************** */
const httpStatus = require("http-status");
const logger = require("../config/logger");
const { Movies } = require("../models");

/* ****************** package Import ****************************************************** */

/** ***************** ApiError Import ***************************************************** */
const ApiError = require("../utils/ApiError");

/** ***************** Counter services Import ********************************************* */
const counter = require("./counter.service");
// const jsonFile = require("../../convertedData-15-03-21.json");

/**
 * Query for moviess
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const queryMoviess = async (filterData, options) => {
  try {
    const moviess = await Movies.aggregate([
      {
        $unwind: "$genres",
      },
      {
        $group: {
          _id: "$genres",
          movies: {
            $push: {
              director: "$director",
              imdb_rating: "$imdb_rating",
              length: "$length",
              poster: "$poster",
              title: "$title",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          genres: "$_id",
          movies: "$movies",
        },
      },
    ]);
    return moviess;
  } catch (e) {
    logger.error(e);
  }
};

/**
 * Get movies by id
 * @param {ObjectId} id
 * @returns {Promise<Movies>}
 */
const getMoviesById = async (id) => {
  try {
    return Movies.findById(id);
  } catch (e) {
    logger.error(e);
  }
};

// exporting all the methods
module.exports = {
  queryMoviess,
  getMoviesById,
};
