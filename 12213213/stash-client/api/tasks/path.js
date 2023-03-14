"use strict";

// Third Party
const include = require("include")(__dirname);

// Project
const basePath = include("api/path");

module.exports = taskId => `${basePath()}/tasks/${taskId || ""}`;
