import { Router } from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getOneMessageById,
  updateMessage,
} from "./messageServices.js";
import {
  createMessageValidator,
  deleteMessageValidator,
  getOneMessageByIdValidator,
  updateMessageValidator,
} from "./messageValidators.js";

const router = Router();

router
  .route("/")
  .get(getAllMessages)
  .post(createMessageValidator, createMessage);
router
  .route("/:id")
  .get(getOneMessageByIdValidator, getOneMessageById)
  .put(updateMessageValidator, updateMessage)
  .delete(deleteMessageValidator, deleteMessage);

export default router;
