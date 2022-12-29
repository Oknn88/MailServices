const express = require("express");
const router = express.Router();
const test = require("../controller/mailSender").test;
const contact = require("../controller/mailSender").contact;

router.post("/", test);
router.post("/contact", contact);

module.exports = router;
