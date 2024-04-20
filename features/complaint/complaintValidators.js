import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneComplaintByIdValidator = [
  check("id").isMongoId().withComplaint(`invalid complaint id format`),
  validatorCatcher,
];

export const createComplaintValidator = [
  check("description")
    .notEmpty()
    .withComplaint(`description is required`)
    .isLength({ min: 5 })
    .withComplaint("Too short description")
    .isLength({ max: 125 })
    .withComplaint("Too long description"),
  check("userId").isMongoId().withMessage(`invalid fromUserId format`),
  // .notEmpty()
  // .withMessage(`fromUserId is required`),
  check("adminId").isMongoId().withMessage(`invalid toUserId format`),
  // .notEmpty()
  // .withMessage(`toUserId is required`),
  validatorCatcher,
];

export const updateComplaintValidator = [
  check("id").isMongoId().withComplaint(`invalid category id format`),
  validatorCatcher,
];

export const deleteComplaintValidator = [
  check("id").isMongoId().withComplaint(`invalid category id format`),
  validatorCatcher,
];
