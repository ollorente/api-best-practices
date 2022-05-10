const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

router
  .route("/")
  /**
   * @openapi
   * /api/v1/workouts:
   *   post:
   *     tags:
   *       - Workouts
   *     responses:
   *       201:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Workout"
   */
  .post(workoutController.createNewWorkout)
  /**
   * @openapi
   * /api/v1/workouts:
   *   get:
   *     tags:
   *       - Workouts
   *     parameters:
   *       - in: query
   *         name: mode
   *         schema:
   *           type: string
   *         description: The mode of a workout
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Workout"
   *       5XX:
   *         description: FAILED
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: FAILED
   *                 data:
   *                   type: object
   *                   properties:
   *                     error:
   *                       type: string
   *                       example: "Some error message"
   */
  .get(workoutController.getAllWorkouts);

router
  .route("/:workoutId")
  .get(workoutController.getOneWorkout)
  .patch(workoutController.updateOneWorkout)
  .delete(workoutController.deleteOneWorkout);

router.route("/:workoutId/records").get(recordController.getRecordForWorkout);

module.exports = router;
