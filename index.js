const mf = require('mineflayer')
const sleep = require('system-sleep')
const { host, port, version, admin, prefix, tokendc } = require('./config.json')
const username = "§5§lBoy" + Math.random().toString().substr(2,5)

function generateHash() {
let hash = generateHash();
let bot = mf.createBot({
    host: host,
    port: port,
    username: username,
    version: version,
    keepalive: true
})

bot.on('login', () => {
    sleep(300);
    bot.chat(`/v on`)
    sleep(300)
    bot.chat(`/god on`)
    sleep(300)
    bot.chat(`/ci **`)
    sleep(300)
    bot.chat(`/team leave @s`)
    sleep(300)
    bot.chat(`/c on`)
    sleep(300)
    bot.chat(`&5&lBoy has been loaded! Running version 1.0.0beta`)
    sleep(300)
    setInterval(() => {
        setTimeout( () => bot.chat(`&5&lLol the Boy prefix is ? do ?help or something idk`),
            50000);

bot.lockers = {};
bot.noopers = {};
setTimeout(() => {
    console.clear();
},1000);
let lastMessage = '';
// commands
bot.on('chat', (u, m) => {
    let lastMessage = m;
    if (m.startsWith(prefix + hash)) {
        let command = m.split(prefix+hash)[1].toString()
        if(!command || command.match(/(\.)|(index\.js)|(config\.json)/g)) return;
        command = command.split(" ")[0]
        if(!command) command = m.split(prefix+hash)[1].toString();
        if(require("fs").existsSync("./hashed_commands/"+command+".js")) {
            try {
                require("./hashed_commands/"+command+".js")(bot,u,m,prefix,hash);
                hash = generateHash();
            } catch (e) {
                console.error(e.toString())
            }
            return;
        }
    }

    if(m.startsWith(prefix)) {
        let command = m.split(prefix)[1].toString()
        if(!command || command.match(/(\.)|(index\.js)|(config\.json)/g)) return;
        if(require("fs").existsSync("./commands/"+command+".js")) {
            try {
                require("./commands/"+command+".js")(bot,u,m,prefix);
            } catch (e) {
                console.error(e.toString())
            }
            return;
        }
    }
    if(m == prefix + `lock`) {
        bot.chat(`&4&lI'm sorry but admin commands require a hash.` + u)
    } else if(m == "Crazy") {
        bot.chat(`&5&lIs cool`)
    }

})


bot.on('chat',function(_,_2,json) {
    m = json.toString();
    if(m == "I'm sorry, but you do not have permission to perform this command. Please contact the server administrators if you believe that this is in error.") {
        bot.chat('/op @s[type=player]')
    } else if(m == "Vanish for " + username + ": disabled") {
        bot.chat('/v on')
    } else if(m == "You have been muted!") {
        bot.chat('/mute ' + username + ' 0s')
    } else if(m == "Your voice has been silenced!") {
        bot.chat('/mute ' + username + ' 0s')
    }
})

let queue = [

]
bot.on('message', (jsonMsg) => {
    console.log(jsonMsg.toString())
    queue.push(
        jsonMsg.toString()
            .replace(regex,"[BAD LINK]")
            .replace("@","[@] ")
            .replace(/\\/g,"\\\\")
            .replace(/\`/g,"\\`")
            .replace(/\*/g,"\\*")
            .replace(/\|/g,"\\|")
            .replace(/\~/g,"\\~")
            .replace(/\-/g,"\\-")
            .replace(/\>/g,"\\>")
            .replace(/\:/g,"\\:"))
})
//bot.on('end', () => {
//  sleep(15000);
//  require('child_process').exec("node .", function () {
//    process.kill();
//  });
//})

process.on("uncaughtException",(e) => {console.error(e)})
sleep(500)
require('./proxyify.js')})})