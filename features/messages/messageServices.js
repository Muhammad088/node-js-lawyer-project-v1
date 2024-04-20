import Message from "./messageModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create message
 * @ACL           user
 * @route         post    api/v1/messages
 */
export const createMessage = createOne(Message);

/**
 * @description   get all messages
 * @ACL           user
 * @route         get    api/v1/messages
 */
export const getAllMessages = getAll(Message);

/**
 * @description   get one message by id
 * @ACL           private
 * @route         get    api/v1/messages/:id
 */
export const getOneMessageById = getOneById(Message);

/**
 * @description   update message
 * @ACL           private
 * @route         put    api/v1/messages/:id
 */
export const updateMessage = updateOne(Message);

/**
 * @description   delete message
 * @ACL           admin
 * @route         delete    api/v1/messages/:id
 */
export const deleteMessage = deleteOne(Message);
