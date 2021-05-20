"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHello = void 0;
/**
 * Use this function to create a greeting string with the given name
 * @param name The name to greet
 */
var makeHello = function (name) { return "Hello " + (name || 'world'); };
exports.makeHello = makeHello;
