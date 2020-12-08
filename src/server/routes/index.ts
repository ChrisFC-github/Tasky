// @ts-nocheck
import * as express from "express";
import eventsRouter from "./events";
import usersRouter from "./users";
import categoryRouter from "./category";
import remindersRouter from "./reminders";
import messagesRouter from "./messages";
import tasksRouter from "./tasks";


const router = express.Router();
const cors = require("cors");
const helmet = require("helmet");

router.use(helmet());
router.use(cors({ origin: "http://localhost:3000" }));
router.use(express.json());


router.use("/events", eventsRouter);
router.use("/users", usersRouter);
router.use("/category", categoryRouter);
router.use("/reminders", remindersRouter);
router.use("/messages", messagesRouter);
router.use("/tasks", tasksRouter);

export default router;