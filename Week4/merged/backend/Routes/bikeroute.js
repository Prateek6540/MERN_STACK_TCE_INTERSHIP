const express = require("express");
const router = express.Router();
const bikeController = require("../Controllers/bikeController");

router.get("/", bikeController.getAllBikes);
router.post("/", bikeController.addBikes);
router.get("/:id", bikeController.getById);
router.put("/:id", bikeController.updateBike);
router.delete("/:id", bikeController.deleteBike);

module.exports = router;
