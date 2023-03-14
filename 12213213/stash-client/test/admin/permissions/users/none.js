"use strict";

// Third Party
const defaults = require("lodash/defaults");
const include = require("include")(__dirname);

// Project
const stash = include("index"); // Normally: require("stash-client");

// Test
const stashConfig = include("test/config");
const config = defaults({
  limit: 100
}, stashConfig);
const params = {
  filter: "test.user"
};

// jscs:disable jsDoc
stash(config).api().admin().permissions().users().none(params)
  .then(response => console.log(response.body))
  .catch(console.error);
