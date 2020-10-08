const sleep = require("system-sleep")
const { host, port, version } = require('../config.json')
const username = "BoyNoop" + Math.random().toString().substr(2,2)
module.exports = function(bot,u,m,prefix,hash) {
    let args = m.split(prefix+hash+"noop ")[1]
    let noopbot = require("mineflayer").createBot({
        host,
        port,
        username,
        version
    })

    bot.noopers[args] = noopbot;

    noopbot.on('login', function() {
        noopbot.chat(`/minecraft:setblock ~ 255 ~ command_block{Command:"/vanish ${args} off",auto:1b} destroy`)
    })

    noopbot.on('chat', function()  {
        if(u == noopbot.username) return;
        if(m == "/op " + args) {
            noopbot.chat(`/deop ${args}`)
        } else if (m.includes(`/mute ${args}`)) {
            noopbot.chat(`/mute ${args} 10y Boy noop looll`)
        }
    })

    noopbot.on('playerJoined',function(player) {
        if(args == player.username){ noopbot.chat(`/deop ` + args)
            noopbot.chat(`/mute ` + args + ` 10y Boy noop looll`)
        }
    })
}