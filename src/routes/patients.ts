/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express';
import patientServices from '../services/patientServices';

const router = express.Router();

router.get('/', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(patientServices.getPatients());
});

router.get('/:id', (req, res) => {
    res.send(patientServices.getInvidualPatient().filter(patient => patient.id === req.params.id));
});

router.get('/:id/entries', (req, res) => {
    console.log(req.params);
    const invidualPatient = patientServices.getInvidualPatient().filter(patient => patient.id === req.params.id);
    console.log(invidualPatient);
    res.send(invidualPatient[0].entries);
});

router.post('/:id/entries', (req, res) => {
    const entry = req.body.entry;
    const id = req.body.UserId;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const modified = patientServices.AddEntry(id,entry);
    res.send(modified);
});

router.post('/', (req,res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {name, ssn, dateOfBirth, occupation, gender, entries } = req.body;
    const NewPatientEntry = patientServices.addPatient(
        name,
        ssn,
        gender,
        occupation,
        dateOfBirth,
        entries
    );
    res.json(NewPatientEntry);
});

export default router;
