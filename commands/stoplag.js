const sleep = require("system-sleep")
module.exports = function(bot,u,m,prefix) {
    bot.chat(`&5&lClearing lag...`)
    sleep(300)
    bot.chat(`/de`)
    sleep(300)
    bot.chat(`/gamerule commandBlockOutput False`)
    sleep(300)
    bot.chat(`/gamerule doMobSpawning False`)
    sleep(300)
    bot.chat(`&5&lCleared lag!`)
}