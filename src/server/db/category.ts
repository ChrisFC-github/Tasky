// @ts-nocheck
import { Query } from "./index";

const allCategory = () => Query(`SELECT * FROM category;`);

const specificCategory = (categoryid) => Query(`SELECT * FROM category WHERE category.categoryid = ?;`, [categoryid]);

const createCategory = (categoryid, name, relationid, childnum) => Query(`INSERT INTO category (categoryid, name, relationid, childnum) 
VALUES (?, ?, ?, ?);`, [categoryid, name, relationid, childnum]);

const updateCategory = (name, relationid, childnum, categoryid, reqcategoryid) => Query(`
UPDATE category
SET 
name = ?,
relationid = ?,
childnum = ?,
categoryid = ?
WHERE category.id = ?;`, [name, relationid, childnum, categoryid, reqcategoryid]);

const removeCategory = (categoryid) => Query(`DELETE FROM category WHERE category.categoryid = ?;`, [categoryid]);

export default {
    allCategory,
    specificCategory,
    createCategory,
    updateCategory,
    removeCategory
}