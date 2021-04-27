const cron = require("cron");
exports.run = async (client, message, args) => {
  
const test = new cron.CronJob("00 5 * * * *", () => {
    client.channels.fetch("796582069332869120");
    let testmsg = client.channels.cache.get("796582069332869120");
    testmsg.send("cron test.");
})
test.start()
}