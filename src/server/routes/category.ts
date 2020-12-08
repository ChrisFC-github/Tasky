// @ts-nocheck
import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await db.Category.allCategory()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqcategoryid", async (req, res) => {
    try {
        const categoryid = req.params.reqcategoryid;
        const data = await db.Category.specificCategory(categoryid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        res.json(await db.Category.createCategory(req.body.categoryid, req.body.name, req.body.relationid, req.body.childnum));
        res.status(200).send(`
        Category ${req.body.name} has been added
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqcategoryid", async (req, res) => {
    try {
        const reqcategoryid = req.params.reqcategoryid;
        await db.Category.updateCategory(req.body.name, req.body.relationid, req.body.childnum, req.body.categoryid, reqcategoryid);
        res.status(200).send(`Updated the category name to ${req.body.name}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqcategoryid", async (req, res) => {
    try {
        const categoryid = req.params.reqcategoryid;
        await db.Category.removeCategory(categoryid);
        res.send(`category ${categoryid} was removed`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router