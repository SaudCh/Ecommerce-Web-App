const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController")

router.post("/add", cartController.addItem);
router.get("/get/:id", cartController.getCartByID)
router.delete("/delete/:id", cartController.deleteItem)
router.patch("/decquan/:id", cartController.decQuant)
router.patch("/incquan/:id", cartController.incQuant)

module.exports = router;