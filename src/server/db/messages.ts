// @ts-nocheck
import { Query } from "./index";

const allMessages = () => Query(`SELECT * FROM messages`);

const specificMessage = (messageid) => Query(`SELECT * FROM messages WHERE messages.messageid = ?;`, [messageid]);

const createMessage = (content, relationid, childid) => Query(`INSERT INTO messages (messageid, content, relationid, childnum) 
VALUES (?, ?, ?);`, [content, relationid, childid]);

const updateMessage = (content, relationid, childid, messageid) => Query(`
UPDATE messages
SET 
content = ? ,
relationid = ?,
childnum = ?,
WHERE messages.id = ?;`, [content, relationid, childid, messageid]);

const removeMessage = (messageid) => Query(`DELETE FROM messages WHERE messages.id = ?;`, [messageid]);

export default {
    allMessages,
    specificMessage,
    createMessage,
    updateMessage,
    removeMessage
}