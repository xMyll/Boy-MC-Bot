const sleep = require("system-sleep")
const mf = require("mineflayer")
const { host, port, version } = require('../config.json')
module.exports = function(bot,u,m,prefix,hash) {
    let args = m.split(prefix + hash + "lock ")[1];

    let locker = mf.createBot({
        host: host,
        port: port,
        username: "§k"+Math.random().toString().substr(2,5),
        version: version
    })

    bot.lockers[args] = locker;
    locker.on('login', () => {
        locker.chat(`/minecraft:setblock ~ 255 ~ command_block{Command:"/essentials:vanish ${args} off",auto:1b} destroy`)
    })

    locker.on('playerJoined',function(player) {
        if(args == player.username) locker.chat(`/icu control ` + args)
    })
}