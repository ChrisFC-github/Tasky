// @ts-nocheck
import * as mysql from "mysql";
import Events from "./events";
import Users from "./users";
import Category from "./category";
import Reminders from "./reminders";
import Messages from "./messages";

export const Connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b742c71a1c0af7",
  password: "7d6dca5a",
  database: "heroku_bfe19d473e6aa58",
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
  });
});
};

export default {
  Events,
  Users,
  Category,
  Reminders,
  Messages
};