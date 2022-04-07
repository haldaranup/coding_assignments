const express = require("express");
const User = require("../models/user.model");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/",
  body("email")
    .trim()
    .isEmail()
    .withMessage()
    .custom(async (value) => {
      let user = await User.findOne({ email: value });
      if (user) {
        throw new error("This emial already exist");
      }
      return true;
    }),
  body("pincode")
    .trim()
    .not()
    .isEmail()
    .withMessage("Picode should not be empty")
    .isNumeric()
    .withMessage("It should be number")
    .custom((value) => {
      if (value && value.length != 6) {
        throw new error("Length should be exactly 6");
      }
      return true;
    }),
  body("age")
    .trim()
    .not()
    .isEmail()
    .withMessage("Picode should not be empty")
    .isNumeric()
    .withMessage("It should be number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new error("Age can't be more than 100 or less than 1");
      }
      return true;
    }),
  body("gender")
    .trim()
    .not()
    .isEmpty()
    .withMessage("It is required")
    .custom((value) => {
      if (value != "male" && value != "female" && value != "other") {
        throw new error("It is required");
      }
      return true;
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (error) {
      console.log("error:", error);
    }
  }
);

module.exports = router
