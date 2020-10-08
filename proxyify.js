const fs = require('fs');
// Proxies for: HTTP
// Get more at proxyscrape.com
let proxylist = fs.readFileSync('http_proxies.txt')

//const http = require('http');
//const ProxyAgent = require('proxy-agent');
// Makes the proxies usable by removing them from the string and adding them to an array
proxylist.split['\n'];
let length = proxylist.length;
let proxies = [];
for (i = 0; i < length; i++) {
    proxies.push(proxylist[i]);
}
console.log(proxies)
// Get the proxy to use

// the rest works just like any other normal HTTP request
/*
http.get(opts, onresponse);

function onresponse (res) {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
}*/