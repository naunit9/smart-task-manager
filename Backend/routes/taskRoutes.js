const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

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