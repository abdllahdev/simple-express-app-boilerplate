const router = require("express").Router();
const { exampleController } = require("../controllers");
const { validator } = require("../middlewares");
const { exampleValidator } = require("../validators");

router.get("/", exampleController.getAll);

router.post(
  "/create",
  validator(exampleValidator.create),
  exampleController.create
);

router.get("/:id", exampleController.getById);

router.put(
  "/:id",
  validator(exampleValidator.update),
  exampleController.update
);

router.delete("/:id", exampleController.destroy);

module.exports = router;
