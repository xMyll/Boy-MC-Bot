const sleep = require("system-sleep")
module.exports = function(bot,u,m,prefix) {
    bot.chat('/op ' + u)
    sleep(300)
    bot.chat('&5&lYou are now opped!')
}