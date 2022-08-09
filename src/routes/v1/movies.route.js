/** ***************** package Import ******************************************************** */

const express = require("express");

/** ***************** auth , validate from middleware Import ******************************** */

const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");

/** ***************** movies Validation from validation Import ******************************** */

const moviesValidation = require("../../validations/movies.validation");

/** ***************** moviesController from controller Import ********************************* */

const moviesController = require("../../controllers/movies.controller");

const router = express.Router();

/*
path - v1/moviess
router to create movies and get movies
post - to create movies from getting movies inputs
get - to show the gathered movies details to admin or movies
function validate - This function is to validate the movies input
function moviesController - This function is to create the movies after the auth and validation completed
*/

router
  .route("/")
  .get(
    auth("FSMovies2021"),
    validate(moviesValidation.getMoviess),
    moviesController.getMoviess
  );
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Moviess
 *   description: Movies management and retrieval
 */

/**
 * @swagger
 *  /movies:
 *    get:
 *      summary: Get all moviess
 *      description: Only admins can retrieve all moviess.
 *      tags: [Moviess]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: sortBy
 *          schema:
 *            type: string
 *          description: sort by query in the form of field:desc/asc (ex. name:asc)
 *        - in: query
 *          name: limit
 *          schema:
 *            type: integer
 *            minimum: 1
 *          default: 10
 *          description: Maximum number of moviess
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          description: Page number
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  results:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Movies'
 *                  page:
 *                    type: integer
 *                    example: 1
 *                  limit:
 *                    type: integer
 *                    example: 10
 *                  totalPages:
 *                    type: integer
 *                    example: 1
 *                  totalResults:
 *                    type: integer
 *                    example: 1
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */
