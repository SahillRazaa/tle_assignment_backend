const syncHandles = require("./tasks/syncHandles");
const syncAllStudentsContests = require("./tasks/syncContest");

module.exports = async function runSyncTasks() {
  try {
    await syncHandles();
    await syncAllStudentsContests();
    console.log("All tasks completed successfully.");
  } catch (err) {
    console.error("Cron task error:", err.message || err);
  }
};