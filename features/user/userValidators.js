import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneUserByIdValidator = [
  check("id").isMongoId().withMessage(`invalid user id format`),
  validatorCatcher,
];

export const createUserValidator = [
  check("name")
    .notEmpty()
    .withMessage(`category is required`)
    .isLength({ min: 5 })
    .withMessage("Too short name")
    .isLength({ max: 32 })
    .withMessage("Too long name"),
  validatorCatcher,
];

export const updateUserValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];

export const deleteUserValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];
