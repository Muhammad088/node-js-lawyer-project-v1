import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneContractByIdValidator = [
  check("id").isMongoId().withContract(`invalid contract id format`),
  validatorCatcher,
];

export const createContractValidator = [
  check("description")
    .notEmpty()
    .withContract(`description is required`)
    .isLength({ min: 5 })
    .withContract("Too short description")
    .isLength({ max: 125 })
    .withContract("Too long description"),
  check("creatorUserId").isMongoId().withContract(`invalid fromUserId format`),
  // .notEmpty()
  // .withContract(`fromUserId is required`),
  check("employeeUserId").isMongoId().withContract(`invalid toUserId format`),
  // .notEmpty()
  // .withContract(`toUserId is required`),
  check("points")
    .isInt({ min: 50, max: 10000 })
    .withMessage("يجب أن يكون السعر بين 50 و10000 جنيه"),
  // .withMessage("points quantity must be a number between 50 and 10000"),
  validatorCatcher,
];

export const updateContractValidator = [
  check("id").isMongoId().withContract(`invalid category id format`),
  validatorCatcher,
];

export const deleteContractValidator = [
  check("id").isMongoId().withContract(`invalid category id format`),
  validatorCatcher,
];
