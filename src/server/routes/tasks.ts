// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const mandatorytask = 1;
        const data = await db.Events.getAlltasks(mandatorytask)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqeventid", async (req, res) => {
    try {
        const mandatorytask = 1;
        const eventid = req.params.reqeventid;
        const data = await db.Events.getspecTask(eventid, mandatorytask);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Events.deleteTask(eventid);
        res.send(`event task ${eventid} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router