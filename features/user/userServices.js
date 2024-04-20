import User from "./userModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";
/**
 * @description   create user
 * @ACL           Any
 * @route         post    api/v1/users
 */
export const createUser = createOne(User);

/**
 * @description   get all users
 * @ACL           admin
 * @route         get    api/v1/users
 */
export const getAllUsers = getAll(User);

/**
 * @description   get one user by id
 * @ACL           Any
 * @route         get    api/v1/users/:id
 */
export const getOneUserById = getOneById(User);

/**
 * @description   update user
 * @ACL           private
 * @route         put    api/v1/users/:id
 */
export const updateUser = updateOne(User);

/**
 * @description   delete user
 * @ACL           admin
 * @route         delete    api/v1/users/:id
 */
export const deleteUser = deleteOne(User);
