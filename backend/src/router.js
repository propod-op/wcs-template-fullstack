const express = require("express");

const { ItemController, MarcheurController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

/* router.get("/login", MarcheurController.login); */

router.get("/marcheurs", MarcheurController.browse);
router.get("/marcheurs/:id", MarcheurController.read);
router.post("/marcheurs", MarcheurController.add);
router.put("/marcheurs/:id", MarcheurController.edit);
router.delete("/marcheurs/:id", MarcheurController.delete);

router.post("/login", MarcheurController.login);
/*
router.get("/sorties", SortiesController.browse);
router.get("/sorties/:id", MarcheurController.read);
router.post("/sorties", MarcheurController.add);
router.put("/sorties/:id", MarcheurController.edit);
router.delete("/sorties/:id", MarcheurController.delete);
*/

module.exports = router;
