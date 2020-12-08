

import { Query } from './index';


const getAllTasks = () => Query(`
SELECT * FROM events WHERE events.mandatorytask = 1;`);

const getspecTask = (eventid) => Query("SELECT * FROM events WHERE events.id = ? AND events.mandatorytask = 1;", [eventid]);

const deleteTask = (eventid) => Query(`DELETE FROM events WHERE events.id = ?;`, [eventid]);


export default {
    getAllTasks,
    getspecTask,
    deleteTask
}