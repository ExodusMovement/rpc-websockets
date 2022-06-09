"use strict"

if (typeof WebSocket !== "undefined")
{
    module.exports = require("./index.browser.js")
}
else
{
    module.exports = require("./index.node.js")
}
