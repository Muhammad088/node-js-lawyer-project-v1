import expressAsyncHandler from "express-async-handler";
import ApiError from "./apiError.js";
import ApiFeatures from "./apiFeatures.js";
import Message from "../features/messages/messageModel.js";

export const createOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    if (Model === Message) {
      req.body.key = `${req.body.fromUserId}${req.body.toUserId}`;
    }
    const document = await Model.create(req.body);
    res.status(201).json({ data: document });
  });

export const getOneById = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    // const task = await Task.findById(id).populate(`creatorUserId`);
    const document = await Model.findById(id);
    // .populate({
    //   path: `creatorUserId`,
    //   select: "name lawyerNumber",
    // });
    if (!document) {
      next(new ApiError(`no document for this id ${id}`, 404));
    } else {
      res.status(200).send({ data: document });
    }
  });

export const getAll = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    // build query
    const apiFeatures = new ApiFeatures(Model.find(), req.query)
      .filter()
      .limitFields()
      .paginate(await Model.countDocuments())
      .search()
      .sort();

    // execute mongoose query
    const { mongooseQuery, pagination } = apiFeatures;
    const documents = await mongooseQuery;
    res
      .status(200)
      .send({ results: documents.length, pagination, data: documents });
  });

export const deleteOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);

    if (!doc) {
      next(new ApiError(`no doc for this id ${id}`, 404));
    } else {
      res.status(200).send({ msg: `doc ${id} deleted successfully` });
    }
  });

export const updateOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndUpdate(id, req.body, { new: true });

    if (!document) {
      next(new ApiError(`no document for this id ${id}`, 404));
    } else {
      res.status(200).send({ data: document });
    }
  });
