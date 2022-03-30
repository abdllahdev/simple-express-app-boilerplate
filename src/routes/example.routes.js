const router = require("express").Router();
const { exampleController } = require("../controllers");
const { catchValidationErrors } = require("../middlewares");
const { exampleValidation } = require("../validations");

router.get("/", exampleController.getAll);

router.post(
  "/create",
  exampleValidation.create,
  catchValidationErrors,
  exampleController.create
);

router.get("/:id", exampleController.getById);

router.put(
  "/:id",
  exampleValidation.update,
  catchValidationErrors,
  exampleController.update
);

router.delete("/:id", exampleController.destroy);

module.exports = router;
