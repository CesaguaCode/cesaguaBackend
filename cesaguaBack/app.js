"use strict";
exports.__esModule = true;
var server_1 = require("./src/config/server");
try {
    var server = new server_1["default"]();
    server.launch();
}
catch (error) {
    console.log("Error launching server.", error);
}
