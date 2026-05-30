const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  taskName: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Task", taskSchema);