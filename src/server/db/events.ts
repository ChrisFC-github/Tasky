// @ts-nocheck
import { Query } from "./index";

const retrieveallEvents = () => Query(`SELECT * FROM events;`);

const retrievespecEvent = (eventid) => Query("SELECT * FROM events WHERE events.id = ?;", [eventid]);

const createEvent = (title, location, date, start, end) => Query(`INSERT INTO events (title, location, date, start, end) 
VALUES (?, ?, ?, ?, ?);`, [title, location, date, start, end]);

const updateEvent = (title, location, date, start, end, duedate, mandatorytask, completedtask, relationid, childnum, eventid) => Query(`
UPDATE events
SET 
title = ?, 
location = ?, 
date = ?,
start = ?,
end = ?,
duedate = ?, 
mandatorytask = ?, 
completedtask = ?
WHERE events.relationid = ? AND events.childnum = ? AND events.id = ?;`, [title, location, date, start, end, duedate, mandatorytask, completedtask, relationid, childnum, eventid]);

const removeEvent = (eventid) => Query(`DELETE FROM events WHERE events.id = ?;`, [eventid]);

export default {
    retrieveallEvents,
    retrievespecEvent,
    createEvent,
    updateEvent,
    removeEvent
}