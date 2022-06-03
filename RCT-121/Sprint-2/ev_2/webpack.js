const webpack = require('node-watch');
const a = require("fs").appendFile;

webpack('./', { recursive: true,
    filter(f, skip) {
        if (/\/(node_modules|.git|.log)/.test(f)) return skip;
        return /\.(js|jsx)$/.test(f);
      }
}, function(evt, name) {
  a("./src/err.log", `${evt[0]},${name},${new Date().toUTCString()}\n`,()=>{})
});