"use strict"

if (typeof WebSocket !== "undefined")
{
    const { Client } = require("./index.browser.js")
    module.exports = { Client }
}
else
{
    const { Client } = require("./index.node.js")
    module.exports = { Client }
}
