module.exports = function(bot,u,m,prefix,hash) {
    let args = m.split(prefix + hash + "reload ")[1];
    if(require("fs").existsSync("./hashed_commands/"+args+".js")) { delete require.cache[require.resolve(`./${args}.js`)]; } else {
        delete require.cache[require.resolve(`../commands/${args}.js`)]; }
    bot.chat("Reloaded "+ args)
}