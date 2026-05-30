const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

/* Test Route */

router.get("/test", (req, res) => {
  res.json({
    message: "Task Routes Working"
  });
});

/* Recommendation API */

router.get("/recommendations/:userId", async (req, res) => {
  try {

    const userId = Number(req.params.userId);

    const tasks = await Task.find({
      userId: userId
    });

    const completedTasks = tasks.filter(
      task => task.completed === true
    );

    const categoryCount = {};

    completedTasks.forEach(task => {
      categoryCount[task.category] =
        (categoryCount[task.category] || 0) + 1;
    });

    let topCategory = "";
    let maxCount = 0;

    for (const category in categoryCount) {
      if (categoryCount[category] > maxCount) {
        maxCount = categoryCount[category];
        topCategory = category;
      }
    }

    const recommendations = tasks.filter(task =>
      task.category === topCategory &&
      task.completed === false
    );

    res.status(200).json({
      topCategory,
      recommendations
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Add Task */

router.post("/add", async (req, res) => {
  try {

    const newTask = new Task(req.body);
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Get All Tasks */

router.get("/", async (req, res) => {
  try {

    const tasks = await Task.find();

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Update Task */

router.put("/:id", async (req, res) => {
  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Mark Task Complete */

router.patch("/:id/complete", async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Delete Task */

router.delete("/:id", async (req, res) => {
  try {

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;