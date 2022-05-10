const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

router
  .route("/")
  .post(workoutController.createNewWorkout)
  .get(workoutController.getAllWorkouts);

router
  .route("/:workoutId")
  .get(workoutController.getOneWorkout)
  .patch(workoutController.updateOneWorkout)
  .delete(workoutController.deleteOneWorkout);

router.route("/:workoutId/records").get(recordController.getRecordForWorkout);

module.exports = router;
