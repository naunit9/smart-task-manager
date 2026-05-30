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
  },

  category: {
    type: String,
    default: "General"
  },

  completed: {
    type: Boolean,
    default: false
  },

  userId: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Task", taskSchema);