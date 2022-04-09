const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");

router.get("/login/:email/:password", user_controller.login);
router.post("/adduser", user_controller.register);

module.exports = router;