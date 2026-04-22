"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/typedEnv.ts
var import_config = require("dotenv/config");
var import_zod = __toESM(require("zod"), 1);
var envSchema = import_zod.default.object({
  PORT: import_zod.default.coerce.number().min(1e3)
});
var env = envSchema.parse(process.env);

// src/index.ts
var import_express2 = __toESM(require("express"), 1);

// src/routes/calc.route.ts
var import_express = require("express");
var import_zod2 = __toESM(require("zod"), 1);
var router = (0, import_express.Router)();
var bodySchema = import_zod2.default.object({
  num1: import_zod2.default.number(),
  num2: import_zod2.default.number()
});
router.get("/sum", (request, response) => {
  try {
    const parsed = bodySchema.parse(request.body);
    const { num1, num2 } = parsed;
    const result = num1 + num2;
    return response.json({ result });
  } catch (e) {
    if (e instanceof import_zod2.ZodError) {
      const pretty = import_zod2.default.prettifyError(e);
      return response.status(400).json({ error: pretty });
    }
    return response.status(400);
  }
});

// src/index.ts
var PORT = env.PORT || 3e3;
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use("/calc", router);
app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
