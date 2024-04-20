import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTaskById,
  updateTask,
} from "./taskServices.js";
import {
  createTaskValidator,
  deleteTaskValidator,
  getOneTaskByIdValidator,
  updateTaskValidator,
} from "./taskValidators.js";

const router = Router();

router.route("/").get(getAllTasks).post(createTaskValidator, createTask);
router
  .route("/:id")
  .get(getOneTaskByIdValidator, getOneTaskById)
  .put(updateTaskValidator, updateTask)
  .delete(deleteTaskValidator, deleteTask);

export default router;
