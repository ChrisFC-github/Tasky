// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import * as moment from "moment";
import db from "../db";

const router = express.Router();
const { checkJwt } = require("../check-jwt");

// to add authentication add " checkJwt," before async

router.get("/", async (req, res) => {
    try {
        const data = await db.Events.retrieveallEvents()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/mandatory', async (req, res) => {
    try {
        const data = await db.Events.mandatoryEvents();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.get("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        const data = await db.Events.retrievespecEvent(eventid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {  
        // format all dates with moment here first. Then, send to database. 
        // req.body.start = moment(req.body.start).utc() ;   
        // req.body.end = moment(req.body.end).utc();
        // req.body.date = moment(req.body.date).utc();
        // console.log(req.body.start, req.body.end, req.body.date);
        // let event = moment(`${req.body.date}${req.body.start}`).utc();
        // let start = moment(`${req.body.date} ${req.body.start}`, 'MM-DD-YYYY HH:mm', true).format();
        // let end = moment(`${req.body.end}`, 'MM/DD/YYYY', true).format();

        // console.log(start);
        let date = moment(req.body.date).format();
        let start = moment(req.body.start).format();
        let end = moment(req.body.end).format();
        if (req.body.mandatorytask) {
            const isMandatory = 1;
            res.status(200).json(await db.Events.createEvent(req.body.title, req.body.location, date, start, end, isMandatory));
        } else {
            const isMandatory = 0;
            res.status(200).json(await db.Events.createEvent(req.body.title, req.body.location, date, start, end, isMandatory));
        }
        console.log(start);
        console.log(end);
        console.log(date);
        console.log(req.body)
       
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Events.updateEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, req.body.relationid, req.body.childnum, eventid);
        res.status(200).send(`Updated event ${eventid}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqeventid", async (req, res) => {
    try {
        const eventid = req.params.reqeventid;
        await db.Events.removeEvent(eventid);
        res.send(`event ${eventid} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;