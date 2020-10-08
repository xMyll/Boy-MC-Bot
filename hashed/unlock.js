module.exports = function(bot,u,m,prefix,hash) {
    let args = m.split(prefix + hash + "unlock ")[1];
    bot.lockers[args].quit();
    bot.lockers[args].end();
}