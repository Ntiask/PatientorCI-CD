"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = __importDefault(require("express"));
const patientServices_1 = __importDefault(require("../services/patientServices"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(patientServices_1.default.getPatients());
});
router.get('/:id', (req, res) => {
    res.send(patientServices_1.default.getInvidualPatient().filter(patient => patient.id === req.params.id));
});
router.get('/:id/entries', (req, res) => {
    console.log(req.params);
    const invidualPatient = patientServices_1.default.getInvidualPatient().filter(patient => patient.id === req.params.id);
    console.log(invidualPatient);
    res.send(invidualPatient[0].entries);
});
router.post('/:id/entries', (req, res) => {
    const entry = req.body.entry;
    const id = req.body.UserId;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const modified = patientServices_1.default.AddEntry(id, entry);
    res.send(modified);
});
router.post('/', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, ssn, dateOfBirth, occupation, gender, entries } = req.body;
    const NewPatientEntry = patientServices_1.default.addPatient(name, ssn, gender, occupation, dateOfBirth, entries);
    res.json(NewPatientEntry);
});
exports.default = router;
