"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PatientEntry_1 = require("../types/PatientEntry");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseString = (string) => {
    if (!string || !isString(string)) {
        throw new Error('Incorrect or missing comment');
    }
    return string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(PatientEntry_1.gender).includes(param);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEntries = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Array.isArray(param);
};
const parseGender = (x) => {
    if (!x || !isGender(x)) {
        throw new Error('Incorrect or missing gender: ' + x);
    }
    return x;
};
const parseEntries = (x) => {
    if (!x || !isEntries(x)) {
        throw new Error('Incorrect or missing gender: ' + x);
    }
    return x;
};
const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation, entries }) => {
    const newEntry = {
        name: parseString(name),
        dateOfBirth: parseString(dateOfBirth),
        ssn: parseString(ssn),
        gender: parseGender(gender),
        occupation: parseString(occupation),
        entries: parseEntries(entries)
    };
    return newEntry;
};
exports.default = toNewPatientEntry;
