//node-cron
const cron = require("node-cron");

cron.schedule("*/10 * * * * *", () => {
    console.log("Called after 10 seconds", new Date());
});


