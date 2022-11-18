const express = require("express");
console.log("eee");
const router = express.Router();
const controller = require("../controllers/arithmetic");

router.post('/', controller.arithmetic);

module.exports = router;
