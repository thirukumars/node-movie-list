/** ***************** package Import ******************************************************** */

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

/** ***************** toJson and paginate from plugins folder ******************************************************** */

const { toJSON, paginate } = require("./plugins");

/** ***************** roles from config/roles  ******************************************************** */

/*
  moviesSchema  - It is the schema for our movies module
*/

const moviesSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      trim: true,
    },

    updatedBy: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

// add plugin that converts mongoose to json
moviesSchema.plugin(toJSON);
moviesSchema.plugin(paginate);

/**
 * @typedef movies
 */
const movies = mongoose.model("movies", moviesSchema);

module.exports = movies;
