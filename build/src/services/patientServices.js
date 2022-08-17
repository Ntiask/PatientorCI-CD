"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsJSON_1 = __importDefault(require("../../data/patientsJSON"));
const uuid_1 = require("uuid");
const getPatients = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return patientsJSON_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const getInvidualPatient = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return patientsJSON_1.default.map(({ id, name, dateOfBirth, gender, occupation, ssn, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn,
        entries
    }));
};
const addPatient = (name, dateOfBirth, gender, occupation, ssn, entries) => {
    const NewPatientEntry = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: (0, uuid_1.v4)(),
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation,
        entries
    };
    patientsJSON_1.default.push(NewPatientEntry);
    return NewPatientEntry;
};
const AddEntry = (UserId, entry) => {
    entry.id = (0, uuid_1.v4)();
    patientsJSON_1.default.filter(patient => patient.id === UserId)[0].entries.unshift(entry);
    return patientsJSON_1.default.filter(patient => patient.id === UserId)[0];
};
exports.default = {
    getPatients,
    addPatient,
    getInvidualPatient,
    AddEntry
};
