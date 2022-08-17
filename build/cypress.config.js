"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(_on, _config) {
            // implement node event listeners here
        },
    },
});
