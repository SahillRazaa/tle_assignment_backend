const mongoose = require("mongoose");

const reminderLogSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  lastSentDate: { type: String, required: true },
});

module.exports = mongoose.model("ReminderLog", reminderLogSchema);
