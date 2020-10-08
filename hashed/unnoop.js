module.exports = function(bot,u,m,prefix,hash) {
    let args = m.split(prefix + hash + "unnoop ")[1];
    bot.noopers[args].quit();
    bot.noopers[args].end();
}