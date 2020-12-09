/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/check-jwt.ts":
/*!*********************************!*\
  !*** ./src/server/check-jwt.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\r\nvar jwksRsa = __webpack_require__(/*! jwks-rsa */ \"jwks-rsa\");\r\n// const { domain, audience } = require('../../.env');\r\nvar checkJwt = jwt({\r\n    secret: jwksRsa.expressJwtSecret({\r\n        cache: true,\r\n        rateLimit: true,\r\n        jwksRequestsPerMinute: 5,\r\n        jwksUri: \"https://taskycalendar.us.auth0.com/.well-known/jwks.json\",\r\n    }),\r\n    audience: \"https://tasky-api/\",\r\n    issuer: \"https://taskycalendar.us.auth0.com/\",\r\n    algorithms: ['RS256'],\r\n});\r\nmodule.exports = {\r\n    checkJwt: checkJwt,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/check-jwt.ts?");

/***/ }),

/***/ "./src/server/db/category.ts":
/*!***********************************!*\
  !*** ./src/server/db/category.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar allCategory = function () { return index_1.Query(\"SELECT * FROM category;\"); };\r\nvar specificCategory = function (categoryid) { return index_1.Query(\"SELECT * FROM category WHERE category.categoryid = ?;\", [categoryid]); };\r\nvar createCategory = function (categoryid, name, relationid, childnum) { return index_1.Query(\"INSERT INTO category (categoryid, name, relationid, childnum) \\nVALUES (?, ?, ?, ?);\", [categoryid, name, relationid, childnum]); };\r\nvar updateCategory = function (name, relationid, childnum, categoryid, reqcategoryid) { return index_1.Query(\"\\nUPDATE category\\nSET \\nname = ?,\\nrelationid = ?,\\nchildnum = ?,\\ncategoryid = ?\\nWHERE category.id = ?;\", [name, relationid, childnum, categoryid, reqcategoryid]); };\r\nvar removeCategory = function (categoryid) { return index_1.Query(\"DELETE FROM category WHERE category.categoryid = ?;\", [categoryid]); };\r\nexports.default = {\r\n    allCategory: allCategory,\r\n    specificCategory: specificCategory,\r\n    createCategory: createCategory,\r\n    updateCategory: updateCategory,\r\n    removeCategory: removeCategory\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/category.ts?");

/***/ }),

/***/ "./src/server/db/events.ts":
/*!*********************************!*\
  !*** ./src/server/db/events.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// @ts-nocheck\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar retrieveallEvents = function () { return index_1.Query(\"SELECT * FROM events;\"); };\nvar retrievespecEvent = function (eventid) { return index_1.Query(\"SELECT * FROM events WHERE events.id = ?;\", [eventid]); };\nvar createEvent = function (title, location, date, start, end, mandatorytask) { return index_1.Query(\"INSERT INTO events (title, location, date, start, end, mandatorytask) \\nVALUES (?, ?, ?, ?, ?, ?);\", [title, location, date, start, end, mandatorytask]); };\nvar updateEvent = function (title, location, date, start, end, duedate, mandatorytask, completedtask, relationid, childnum, eventid) { return index_1.Query(\"\\nUPDATE events\\nSET \\ntitle = ?, \\nlocation = ?, \\ndate = ?,\\nstart = ?,\\nend = ?,\\nduedate = ?, \\nmandatorytask = ?, \\ncompletedtask = ?\\nWHERE events.relationid = ? AND events.childnum = ? AND events.id = ?;\", [title, location, date, start, end, duedate, mandatorytask, completedtask, relationid, childnum, eventid]); };\nvar removeEvent = function (eventid) { return index_1.Query(\"DELETE FROM events WHERE events.id = ?;\", [eventid]); };\nvar mandatoryEvents = function () { return index_1.Query(\"\\nSELECT * FROM events\\nWHERE mandatorytask = 1\\nORDER BY start;\\n\"); };\nexports.default = {\n    retrieveallEvents: retrieveallEvents,\n    retrievespecEvent: retrievespecEvent,\n    createEvent: createEvent,\n    updateEvent: updateEvent,\n    removeEvent: removeEvent,\n    mandatoryEvents: mandatoryEvents\n};\n\n\n//# sourceURL=webpack:///./src/server/db/events.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Query = exports.Connection = void 0;\n// @ts-nocheck\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar events_1 = __webpack_require__(/*! ./events */ \"./src/server/db/events.ts\");\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/server/db/users.ts\");\nvar category_1 = __webpack_require__(/*! ./category */ \"./src/server/db/category.ts\");\nvar reminders_1 = __webpack_require__(/*! ./reminders */ \"./src/server/db/reminders.ts\");\nvar messages_1 = __webpack_require__(/*! ./messages */ \"./src/server/db/messages.ts\");\nvar tasks_1 = __webpack_require__(/*! ./tasks */ \"./src/server/db/tasks.ts\");\nexports.Connection = mysql.createPool({\n    host: \"us-cdbr-east-02.cleardb.com\",\n    port: 3306,\n    user: \"b742c71a1c0af7\",\n    password: \"7d6dca5a\",\n    database: \"heroku_bfe19d473e6aa58\",\n});\nexports.Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.default = {\n    Events: events_1.default,\n    Users: users_1.default,\n    Category: category_1.default,\n    Reminders: reminders_1.default,\n    Messages: messages_1.default,\n    Tasks: tasks_1.default\n};\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/messages.ts":
/*!***********************************!*\
  !*** ./src/server/db/messages.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar allMessages = function () { return index_1.Query(\"SELECT * FROM messages\"); };\r\nvar specificMessage = function (messageid) { return index_1.Query(\"SELECT * FROM messages WHERE messages.messageid = ?;\", [messageid]); };\r\nvar createMessage = function (content, relationid, childid) { return index_1.Query(\"INSERT INTO messages (messageid, content, relationid, childnum) \\nVALUES (?, ?, ?);\", [content, relationid, childid]); };\r\nvar updateMessage = function (content, relationid, childid, messageid) { return index_1.Query(\"\\nUPDATE messages\\nSET \\ncontent = ? ,\\nrelationid = ?,\\nchildnum = ?,\\nWHERE messages.id = ?;\", [content, relationid, childid, messageid]); };\r\nvar removeMessage = function (messageid) { return index_1.Query(\"DELETE FROM messages WHERE messages.id = ?;\", [messageid]); };\r\nexports.default = {\r\n    allMessages: allMessages,\r\n    specificMessage: specificMessage,\r\n    createMessage: createMessage,\r\n    updateMessage: updateMessage,\r\n    removeMessage: removeMessage\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/messages.ts?");

/***/ }),

/***/ "./src/server/db/reminders.ts":
/*!************************************!*\
  !*** ./src/server/db/reminders.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar getAllReminders = function () { return index_1.Query(\"\\nSELECT * FROM reminders\"); };\r\nvar getOneReminder = function (id) { return index_1.Query(\"\\nSELECT * FROM reminders\\nWHERE id = ?;\", [id]); };\r\nvar newReminder = function (content) { return index_1.Query(\"\\nINSERT INTO reminders (content)\\nVALUES(?);\", [content]); };\r\nvar deleteReminder = function (id) { return index_1.Query(\"\\nDELETE FROM reminders\\nWHERE id = ?\", [id]); };\r\nvar editReminder = function (content, id) { return index_1.Query(\"\\nUPDATE reminders\\nSET content = ?\\nWHERE id = ?;\\n\", [content, id]); };\r\n// const allReminders = (relationid) => Query(`SELECT * FROM reminders WHERE reminders.relationid = ?`, [relationid]);\r\n// const specificReminder = (relationid, childid, reminderid) => Query(`SELECT * FROM reminders WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [relationid, childid, reminderid]);\r\n// const createReminder = (reminderid, content, reqrelationid, reqchildid) => Query(`INSERT INTO reminders (reminderid, content, relationid, childnum) \r\n// VALUES (?, ?, ?, ?);`, [reminderid, content, reqrelationid, reqchildid]);\r\n// const updateReminder = (content, reqrelationid, reqchildid, reqreminderid) => Query(`\r\n// UPDATE reminders\r\n// SET \r\n// content = ? \r\n// WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [content, reqrelationid, reqchildid, reqreminderid]);\r\n// const removeReminder = (relationid, childid, reminderid) => Query(`DELETE FROM reminders WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [relationid, childid, reminderid]);\r\nexports.default = {\r\n    // allReminders,\r\n    // specificReminder,\r\n    // createReminder,\r\n    // updateReminder,\r\n    // removeReminder,\r\n    getAllReminders: getAllReminders,\r\n    newReminder: newReminder,\r\n    deleteReminder: deleteReminder,\r\n    editReminder: editReminder,\r\n    getOneReminder: getOneReminder\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/reminders.ts?");

/***/ }),

/***/ "./src/server/db/tasks.ts":
/*!********************************!*\
  !*** ./src/server/db/tasks.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar getAllTasks = function () { return index_1.Query(\"\\nSELECT * FROM events WHERE events.mandatorytask = 1;\"); };\r\nvar getspecTask = function (eventid) { return index_1.Query(\"SELECT * FROM events WHERE events.id = ? AND events.mandatorytask = 1;\", [eventid]); };\r\nvar deleteTask = function (eventid) { return index_1.Query(\"DELETE FROM events WHERE events.id = ?;\", [eventid]); };\r\nexports.default = {\r\n    getAllTasks: getAllTasks,\r\n    getspecTask: getspecTask,\r\n    deleteTask: deleteTask\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/tasks.ts?");

/***/ }),

/***/ "./src/server/db/users.ts":
/*!********************************!*\
  !*** ./src/server/db/users.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar allusers = function (relationid) { return index_1.Query(\"SELECT * FROM users WHERE users.relationid = ?;\", [relationid]); };\r\nvar specificchild = function (relationid, childid) { return index_1.Query(\"SELECT * FROM users WHERE users.relationid = ? AND users.childnum = ?;\", [relationid, childid]); };\r\nvar createUser = function (name, email, password, role, reqrelationid, childnum) { return index_1.Query(\"INSERT INTO users (name, email, password, role, relationid, childnum) \\nVALUES (?, ?, ?, ?, ?, ?);\", [name, email, password, role, reqrelationid, childnum]); };\r\nvar updateUser = function (name, email, password, role, relationid, childnum, reqrelationid, reqchildid) { return index_1.Query(\"\\nUPDATE users\\nSET \\nname = ?, \\nemail = ?, \\npassword = ?, \\nrole = ?, \\nrelationid = ?, \\nchildnum = ?\\nWHERE users.relationid = ? AND users.childnum = ?;\", [name, email, password, role, relationid, childnum, reqrelationid, reqchildid]); };\r\n/* ? prevents users from creating their own auths */\r\nvar removeChild = function (relationid, childid) { return index_1.Query(\"DELETE FROM users WHERE users.relationid = ? AND users.childnum = ?;\", [relationid, childid]); };\r\nexports.default = {\r\n    allusers: allusers,\r\n    specificchild: specificchild,\r\n    createUser: createUser,\r\n    updateUser: updateUser,\r\n    removeChild: removeChild\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/users.ts?");

/***/ }),

/***/ "./src/server/routes/category.ts":
/*!***************************************!*\
  !*** ./src/server/routes/category.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\r\n// to add authentication add \" checkJwt,\" before async\r\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Category.allCategory()];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                res.status(500).send(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/:reqcategoryid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var categoryid, data, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                categoryid = req.params.reqcategoryid;\r\n                return [4 /*yield*/, db_1.default.Category.specificCategory(categoryid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.send(data[0]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                res.status(500).send(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, err_3;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Category.createCategory(req.body.categoryid, req.body.name, req.body.relationid, req.body.childnum)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                res.status(200).send(\"\\n        Category \" + req.body.name + \" has been added\\n        \");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _c.sent();\r\n                console.log(err_3);\r\n                res.status(500).send(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put(\"/:reqcategoryid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var reqcategoryid, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                reqcategoryid = req.params.reqcategoryid;\r\n                return [4 /*yield*/, db_1.default.Category.updateCategory(req.body.name, req.body.relationid, req.body.childnum, req.body.categoryid, reqcategoryid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.status(200).send(\"Updated the category name to \" + req.body.name);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_4 = _a.sent();\r\n                console.log(err_4);\r\n                res.status(500).send(err_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/:reqcategoryid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var categoryid, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                categoryid = req.params.reqcategoryid;\r\n                return [4 /*yield*/, db_1.default.Category.removeCategory(categoryid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.send(\"category \" + categoryid + \" was removed\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_5 = _a.sent();\r\n                console.log(err_5);\r\n                res.status(500).send(err_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/category.ts?");

/***/ }),

/***/ "./src/server/routes/events.ts":
/*!*************************************!*\
  !*** ./src/server/routes/events.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// @ts-nocheck\nvar express = __webpack_require__(/*! express */ \"express\");\nvar moment = __webpack_require__(/*! moment */ \"moment\");\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\n// to add authentication add \" checkJwt,\" before async\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var data, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Events.retrieveallEvents()];\n            case 1:\n                data = _a.sent();\n                res.json(data);\n                return [3 /*break*/, 3];\n            case 2:\n                err_1 = _a.sent();\n                console.log(err_1);\n                res.status(500).send(err_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/mandatory', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var data, err_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Events.mandatoryEvents()];\n            case 1:\n                data = _a.sent();\n                res.json(data);\n                return [3 /*break*/, 3];\n            case 2:\n                err_2 = _a.sent();\n                console.log(err_2);\n                res.status(500).send(err_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/:reqeventid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var eventid, data, err_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                eventid = req.params.reqeventid;\n                return [4 /*yield*/, db_1.default.Events.retrievespecEvent(eventid)];\n            case 1:\n                data = _a.sent();\n                res.send(data[0]);\n                return [3 /*break*/, 3];\n            case 2:\n                err_3 = _a.sent();\n                console.log(err_3);\n                res.status(500).send(err_3);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var date, start, end, isMandatory, _a, _b, isMandatory, _c, _d, err_4;\n    return __generator(this, function (_e) {\n        switch (_e.label) {\n            case 0:\n                _e.trys.push([0, 5, , 6]);\n                date = moment(req.body.date).format();\n                start = moment(req.body.start).format();\n                end = moment(req.body.end).format();\n                if (!req.body.mandatorytask) return [3 /*break*/, 2];\n                isMandatory = 1;\n                _b = (_a = res.status(200)).json;\n                return [4 /*yield*/, db_1.default.Events.createEvent(req.body.title, req.body.location, date, start, end, isMandatory)];\n            case 1:\n                _b.apply(_a, [_e.sent()]);\n                return [3 /*break*/, 4];\n            case 2:\n                isMandatory = 0;\n                _d = (_c = res.status(200)).json;\n                return [4 /*yield*/, db_1.default.Events.createEvent(req.body.title, req.body.location, date, start, end, isMandatory)];\n            case 3:\n                _d.apply(_c, [_e.sent()]);\n                _e.label = 4;\n            case 4:\n                console.log(start);\n                console.log(end);\n                console.log(date);\n                console.log(req.body);\n                return [3 /*break*/, 6];\n            case 5:\n                err_4 = _e.sent();\n                console.log(err_4);\n                res.status(500).send(err_4);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put(\"/:reqeventid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var eventid, err_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                eventid = req.params.reqeventid;\n                return [4 /*yield*/, db_1.default.Events.updateEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, req.body.relationid, req.body.childnum, eventid)];\n            case 1:\n                _a.sent();\n                res.status(200).send(\"Updated event \" + eventid);\n                return [3 /*break*/, 3];\n            case 2:\n                err_5 = _a.sent();\n                console.log(err_5);\n                res.status(500).send(err_5);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete(\"/:reqeventid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var eventid, err_6;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                eventid = req.params.reqeventid;\n                return [4 /*yield*/, db_1.default.Events.removeEvent(eventid)];\n            case 1:\n                _a.sent();\n                res.send(\"event \" + eventid + \" was deleted\");\n                return [3 /*break*/, 3];\n            case 2:\n                err_6 = _a.sent();\n                console.log(err_6);\n                res.status(500).send(err_6);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/events.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar events_1 = __webpack_require__(/*! ./events */ \"./src/server/routes/events.ts\");\r\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/server/routes/users.ts\");\r\nvar category_1 = __webpack_require__(/*! ./category */ \"./src/server/routes/category.ts\");\r\nvar reminders_1 = __webpack_require__(/*! ./reminders */ \"./src/server/routes/reminders.ts\");\r\nvar messages_1 = __webpack_require__(/*! ./messages */ \"./src/server/routes/messages.ts\");\r\nvar tasks_1 = __webpack_require__(/*! ./tasks */ \"./src/server/routes/tasks.ts\");\r\nvar router = express.Router();\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\r\nrouter.use(helmet());\r\nrouter.use(cors({ origin: \"http://localhost:3000\" }));\r\nrouter.use(express.json());\r\nrouter.use(\"/events\", events_1.default);\r\nrouter.use(\"/users\", users_1.default);\r\nrouter.use(\"/category\", category_1.default);\r\nrouter.use(\"/reminders\", reminders_1.default);\r\nrouter.use(\"/messages\", messages_1.default);\r\nrouter.use(\"/tasks\", tasks_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/messages.ts":
/*!***************************************!*\
  !*** ./src/server/routes/messages.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\r\n// to add authentication add \" checkJwt,\" before async\r\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Messages.allMessages()];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                res.status(500).send(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/:reqmessageid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var messageid, data, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                messageid = req.params.reqmessageid;\r\n                return [4 /*yield*/, db_1.default.Messages.specificMessage(messageid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.send(data[0]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                res.status(500).send(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, err_3;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Messages.createMessage(req.body.content, req.body.relationid, req.body.childid)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                res.status(200).send(\"\\n        message has been created\\n        \");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _c.sent();\r\n                console.log(err_3);\r\n                res.status(500).send(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put(\"/:reqmessageid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var messageid, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                messageid = req.params.reqmessageid;\r\n                return [4 /*yield*/, db_1.default.Messages.updateMessage(req.body.content, req.body.relationid, req.body.childid, messageid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.status(200).send(\"Message Edited\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_4 = _a.sent();\r\n                console.log(err_4);\r\n                res.status(500).send(err_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/:reqmessageid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var messageid, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                messageid = req.params.reqmessageid;\r\n                return [4 /*yield*/, db_1.default.Messages.removeMessage(messageid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.send(\"message \" + messageid + \" was removed\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_5 = _a.sent();\r\n                console.log(err_5);\r\n                res.status(500).send(err_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/messages.ts?");

/***/ }),

/***/ "./src/server/routes/reminders.ts":
/*!****************************************!*\
  !*** ./src/server/routes/reminders.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\r\n// to add authentication add \" checkJwt,\" before async\r\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var reminders, _a;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                _b.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Reminders.getAllReminders()];\r\n            case 1:\r\n                reminders = _b.sent();\r\n                res.json(reminders);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                _a = _b.sent();\r\n                console.log(e);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, reminders, _a;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                id = Number(req.params.id);\r\n                _b.label = 1;\r\n            case 1:\r\n                _b.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Reminders.getOneReminder(id)];\r\n            case 2:\r\n                reminders = (_b.sent())[0];\r\n                res.json(reminders);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                _a = _b.sent();\r\n                console.log(e);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, err_1;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Reminders.newReminder(req.body.content)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                res.status(200).send(\"\\n        \" + req.body.content + \" - reminder created\\n        \");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _c.sent();\r\n                console.log(err_1);\r\n                res.status(500).send(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, e_1;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                console.log(req.params.id);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Reminders.deleteReminder(parseInt(req.params.id))];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _c.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, err_2;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                console.log(req.body.content);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Reminders.editReminder(req.body.content, req.body.id)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _c.sent();\r\n                console.log(err_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// router.get(\"/:reqrelationid\", async (req, res) => {\r\n//     try {\r\n//         const relationid = req.params.reqrelationid;\r\n//         const data = await db.Reminders.allReminders(relationid)\r\n//         res.json(data);\r\n//     } catch (err) {\r\n//         console.log(err);\r\n//         res.status(500).send(err);\r\n//     }\r\n// });\r\n// router.get(\"/:reqrelationid/:reqchildid/:reqreminderid\", async (req, res) => {\r\n//     try {\r\n//         const relationid = req.params.reqrelationid;\r\n//         const childid = req.params.reqchildid;\r\n//         const reminderid = req.params.reqreminderid;\r\n//         const data = await db.Reminders.specificReminder(relationid, childid, reminderid);\r\n//         res.send(data[0]);\r\n//     } catch (err) {\r\n//         console.log(err);\r\n//         res.status(500).send(err);\r\n//     }\r\n// });\r\n// router.post(\"/:reqrelationid/:reqchildid/\", async (req, res) => {\r\n//     try {\r\n//         const reqrelationid = req.params.reqrelationid;\r\n//         const reqchildid = req.params.reqchildid;\r\n//         res.json(await db.Reminders.createReminder(req.body.reminderid, req.body.content, reqrelationid, reqchildid));\r\n//         res.status(200).send(`\r\n//         ${req.body.reminderid} - reminder created\r\n//         `);\r\n//     } catch (err) {\r\n//         console.log(err);\r\n//         res.status(500).send(err);\r\n//     }\r\n// });\r\n// router.put(\"/:reqrelationid/:reqchildid/:reqreminderid\", async (req, res) => {\r\n//     try {\r\n//         const reqrelationid = req.params.reqrelationid;\r\n//         const reqchildid = req.params.reqchildid;\r\n//         const reqreminderid = req.params.reqreminderid;\r\n//         await db.Reminders.updateReminder(req.body.content, reqrelationid, reqchildid, reqreminderid);\r\n//         res.status(200).send(`Edited reminder`)\r\n//     } catch (err) {\r\n//         console.log(err);\r\n//         res.status(500).send(err);\r\n//     }\r\n// });\r\n// router.delete(\"/:reqrelationid/:reqchildid/:reqcategoryid\", async (req, res) => {\r\n//     try {\r\n//         const relationid = req.params.reqrelationid;\r\n//         const childid = req.params.reqchildid;\r\n//         const categoryid = req.params.reqcategoryid;\r\n//         await db.Reminders.removeReminder(relationid, childid, categoryid);\r\n//         res.send(`category ${categoryid} with relation ${relationid} was removed`);\r\n//     } catch (err) {\r\n//         console.log(err);\r\n//         res.status(500).send(err);\r\n//     }\r\n// });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/reminders.ts?");

/***/ }),

/***/ "./src/server/routes/tasks.ts":
/*!************************************!*\
  !*** ./src/server/routes/tasks.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\r\n// to add authentication add \" checkJwt,\" before async\r\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Tasks.getAlltasks()];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                res.status(500).send(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/:reqeventid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var eventid, data, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                eventid = req.params.reqeventid;\r\n                return [4 /*yield*/, db_1.default.Tasks.getspecTask(eventid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.send(data[0]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                res.status(500).send(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/:reqeventid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var eventid, err_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                eventid = req.params.reqeventid;\r\n                return [4 /*yield*/, db_1.default.Tasks.deleteTask(eventid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.send(\"event task \" + eventid + \" was deleted\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _a.sent();\r\n                console.log(err_3);\r\n                res.status(500).send(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/tasks.ts?");

/***/ }),

/***/ "./src/server/routes/users.ts":
/*!************************************!*\
  !*** ./src/server/routes/users.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nvar checkJwt = __webpack_require__(/*! ../check-jwt */ \"./src/server/check-jwt.ts\").checkJwt;\r\n// to add authentication add \" checkJwt,\" before async\r\nrouter.get(\"/:reqrelationid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var relationid, data, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                relationid = req.params.reqrelationid;\r\n                return [4 /*yield*/, db_1.default.Users.allusers(relationid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                res.status(500).send(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/:reqrelationid/:reqchildid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var relationid, childid, data, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                relationid = req.params.reqrelationid;\r\n                childid = req.params.reqchildid;\r\n                return [4 /*yield*/, db_1.default.Users.specificchild(relationid, childid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.send(data[0]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                res.status(500).send(err_2);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/:reqrelationid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var reqrelationid, _a, _b, err_3;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                reqrelationid = req.params.reqrelationid;\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Users.createUser(req.body.name, req.body.email, req.body.password, req.body.role, reqrelationid, req.body.childnum)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                res.status(200).send(\"\\n        \" + req.body.role + \" User \" + req.body.name + \" has been added\\n        \");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _c.sent();\r\n                console.log(err_3);\r\n                res.status(500).send(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put(\"/:reqrelationid/:reqchildid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var reqrelationid, reqchildid, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                reqrelationid = req.params.reqrelationid;\r\n                reqchildid = req.params.reqchildid;\r\n                return [4 /*yield*/, db_1.default.Users.updateUser(req.body.name, req.body.email, req.body.password, req.body.role, req.body.relationid, req.body.childnum, reqrelationid, reqchildid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.status(200).send(\"Updated \" + req.body.role + \" user \" + req.body.name + \" profile information\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_4 = _a.sent();\r\n                console.log(err_4);\r\n                res.status(500).send(err_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/:reqrelationid/:reqchildid\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var relationid, childid, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                relationid = req.params.reqrelationid;\r\n                childid = req.params.reqchildid;\r\n                return [4 /*yield*/, db_1.default.Users.removeChild(relationid, childid)];\r\n            case 1:\r\n                _a.sent();\r\n                res.send(\"child \" + childid + \" with relation \" + relationid + \" was removed from users\");\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_5 = _a.sent();\r\n                console.log(err_5);\r\n                res.status(500).send(err_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/users.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// @ts-nocheck\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\napp.use(express.json());\r\napp.use(\"/api\", routes_1.default);\r\napp.use(express.static(\"public\"));\r\napp.get(\"*\", function (req, res) {\r\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\napp.listen(3000, function () { return console.log(\"Server listening on port 3000\"); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*\
  !*** external "jwks-rsa" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwks-rsa\");\n\n//# sourceURL=webpack:///external_%22jwks-rsa%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });