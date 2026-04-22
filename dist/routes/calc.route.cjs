"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/calc.route.ts
var calc_route_exports = {};
__export(calc_route_exports, {
  calcRouter: () => router
});
module.exports = __toCommonJS(calc_route_exports);
var import_express = require("express");
var import_zod = __toESM(require("zod"), 1);
var router = (0, import_express.Router)();
var bodySchema = import_zod.default.object({
  num1: import_zod.default.number(),
  num2: import_zod.default.number()
});
router.get("/sum", (request, response) => {
  try {
    const parsed = bodySchema.parse(request.body);
    const { num1, num2 } = parsed;
    const result = num1 + num2;
    return response.json({ result });
  } catch (e) {
    if (e instanceof import_zod.ZodError) {
      const pretty = import_zod.default.prettifyError(e);
      return response.status(400).json({ error: pretty });
    }
    return response.status(400);
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calcRouter
});
