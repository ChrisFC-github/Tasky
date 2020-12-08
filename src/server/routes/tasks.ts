// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();
const { checkJwt } = require("../check-jwt");

// to add authentication add " checkJwt," before async

router.get("/", async (req, res) => {
    try {
        const data = await db.Tasks.getAlltasks()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        const data = await db.Tasks.getspecTask(eventid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Tasks.deleteTask(eventid);
        res.send(`event task ${eventid} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router