import Task from "./taskModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create task
 * @ACL           user
 * @route         post    api/v1/tasks
 */
export const createTask = createOne(Task);

/**
 * @description   get all tasks
 * @ACL           admin
 * @route         get    api/v1/tasks
 */
export const getAllTasks = getAll(Task);

/**
 * @description   get one task by id
 * @ACL           Any
 * @route         get    api/v1/tasks/:id
 */
export const getOneTaskById = getOneById(Task);

/**
 * @description   update task
 * @ACL           private
 * @route         put    api/v1/tasks/:id
 */
export const updateTask = updateOne(Task);

/**
 * @description   delete task
 * @ACL           admin
 * @route         delete    api/v1/tasks/:id
 */
export const deleteTask = deleteOne(Task);
