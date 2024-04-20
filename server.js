import express, { json } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import userRoute from "./features/user/userRoutes.js";
import taskRoute from "./features/task/taskRoutes.js";
import reviewRoute from "./features/review/reviewRoutes.js";
import messageRoute from "./features/messages/messageRoutes.js";
import contractRoute from "./features/contracts/contractRoutes.js";
import dbConnection from "./config/database.js";
import ApiError from "./utils/apiError.js";
import errorHandler from "./utils/errorHandler.js";

config({ path: "config.env" });

// connect with db
dbConnection();
// express app
const app = express();

// middlewares
app.use(json());
const mode = process.env.NODE_ENV;
console.log(`mode: ${mode}`);
if (mode === "development") {
  app.use(morgan("dev"));
  console.log(`morgan logger activated on ${mode}`);
}

// mount routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/messages", messageRoute);
app.use("/api/v1/contracts", contractRoute);

// unhandled routes
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// error handling for express
app.use(errorHandler);

const { PORT } = process.env;
app.listen(8000, () => {
  console.log(`server runs successfully on ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Error: ${err}`);
  process.exit(1);
});
