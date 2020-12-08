// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const reminders = await db.Reminders.getAllReminders();
        res.json(reminders);
    } catch {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    const id = Number (req.params.id);
    try{
        const [reminders] = await db.Reminders.getOneReminder(id);
        res.json(reminders);
    } catch {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        
        res.json(await db.Reminders.newReminder(req.body.content));
        res.status(200).send(`
        ${req.body.content} - reminder created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        res.json(await db.Reminders.deleteReminder(parseInt(req.params.id)));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body.content);
        res.json(await db.Reminders.editReminder(req.body.content, req.body.id));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


// router.get("/:reqrelationid", async (req, res) => {
//     try {
//         const relationid = req.params.reqrelationid;
//         const data = await db.Reminders.allReminders(relationid)
//         res.json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// router.get("/:reqrelationid/:reqchildid/:reqreminderid", async (req, res) => {
//     try {
//         const relationid = req.params.reqrelationid;
//         const childid = req.params.reqchildid;
//         const reminderid = req.params.reqreminderid;
//         const data = await db.Reminders.specificReminder(relationid, childid, reminderid);
//         res.send(data[0]);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// router.post("/:reqrelationid/:reqchildid/", async (req, res) => {
//     try {
//         const reqrelationid = req.params.reqrelationid;
//         const reqchildid = req.params.reqchildid;
//         res.json(await db.Reminders.createReminder(req.body.reminderid, req.body.content, reqrelationid, reqchildid));
//         res.status(200).send(`
//         ${req.body.reminderid} - reminder created
//         `);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// router.put("/:reqrelationid/:reqchildid/:reqreminderid", async (req, res) => {
//     try {
//         const reqrelationid = req.params.reqrelationid;
//         const reqchildid = req.params.reqchildid;
//         const reqreminderid = req.params.reqreminderid;
//         await db.Reminders.updateReminder(req.body.content, reqrelationid, reqchildid, reqreminderid);
//         res.status(200).send(`Edited reminder`)
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// router.delete("/:reqrelationid/:reqchildid/:reqcategoryid", async (req, res) => {
//     try {
//         const relationid = req.params.reqrelationid;
//         const childid = req.params.reqchildid;
//         const categoryid = req.params.reqcategoryid;
//         await db.Reminders.removeReminder(relationid, childid, categoryid);
//         res.send(`category ${categoryid} with relation ${relationid} was removed`);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

export default router;