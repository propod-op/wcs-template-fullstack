const express = require("express");

const { ItemController, MarcheurController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/marcheurs", MarcheurController.browse);
// router.get("/marcheurs/:id", MarcheurController.read);
// router.put("/marcheurs/:id", MarcheurController.edit);
// router.post("/marcheurs", MarcheurController.add);
// router.delete("/marcheurs/:id", MarcheurController.delete);

module.exports = router;
