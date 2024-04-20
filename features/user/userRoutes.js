import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUserById,
  updateUser,
} from "./userServices.js";
import {
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  getOneUserByIdValidator,
} from "./userValidators.js";

const router = Router();

router.route("/").get(getAllUsers).post(createUserValidator, createUser);
router
  .route("/:id")
  .get(getOneUserByIdValidator, getOneUserById)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

export default router;
