import express from 'express';
import diagnoseServices from '../services/diagnoseServices';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diagnoseServices.getDiagnoses());
});

router.post('/', (_req, res) => {
    res.send('Posting some Bullshit');
});

export default router;
