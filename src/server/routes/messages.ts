// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await db.Messages.allMessages()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqmessageid", async (req, res) => {
    try {
        const messageid = req.params.reqmessageid;
        const data = await db.Messages.specificMessage(messageid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        res.json(await db.Messages.createMessage(req.body.content, req.body.relationid, req.body.childid));
        res.status(200).send(`
        message has been created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqmessageid", async (req, res) => {
    try {
        const messageid = req.params.reqmessageid;
        await db.Messages.updateMessage(req.body.content, req.body.relationid, req.body.childid, messageid);
        res.status(200).send(`Message Edited`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqmessageid", async (req, res) => {
    try {
        const messageid = req.params.reqmessageid;
        await db.Messages.removeMessage(messageid);
        res.send(`message ${messageid} was removed`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router