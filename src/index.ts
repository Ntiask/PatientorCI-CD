import express from 'express';
import cors from 'cors';
import PatientRouter from './routes/patients';
import DiagnoseRouter from './routes/diagnoses';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use('/api/patients', PatientRouter);
app.use('/api/diagnoses', DiagnoseRouter);

const PORT = process.env.PORT || 3001;

app.get('/api/ping', (_req, res) => {
    res.send('pong');
});

app.listen(PORT, () =>{
    console.log(`server started in port ${PORT}`);
});