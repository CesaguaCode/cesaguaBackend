"use strict";
exports.__esModule = true;
require("dotenv/config");
var express_1 = require("express");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var test_1 = require("../routes/test");
var Server = /** @class */ (function () {
    function Server() {
        this.port = parseInt(process.env.PORT || "");
        this.app = (0, express_1["default"])();
        this.testRouter = new test_1["default"]();
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use((0, morgan_1["default"])("dev"));
        this.app.use(express_1["default"].json({ limit: "50mb" }));
        this.app.use((0, cors_1["default"])());
    };
    Server.prototype.routes = function () {
        this.app.use('/test', this.testRouter.router);
    };
    Server.prototype.launch = function () {
        var _this = this;
        this.app.listen(this.port, function () { return console.log("Running on port", _this.port); });
    };
    return Server;
}());
exports["default"] = Server;
