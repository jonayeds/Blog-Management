"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
// parsers
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
// routes
exports.app.use("/api");
exports.default = exports.app.get("/", (req, res) => {
    res.send("Blog Management is running 🏃🏼‍♂️‍➡️");
});
