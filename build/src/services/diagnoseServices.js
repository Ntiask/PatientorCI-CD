"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnosesJSON_1 = __importDefault(require("../../data/diagnosesJSON"));
const getDiagnoses = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return diagnosesJSON_1.default;
};
const addDiagnose = () => {
    return null;
};
exports.default = {
    getDiagnoses,
    addDiagnose
};
