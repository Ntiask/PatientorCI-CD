"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const patients_1 = __importDefault(require("./routes/patients"));
const diagnoses_1 = __importDefault(require("./routes/diagnoses"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use((0, cors_1.default)());
app.use('/api/patients', patients_1.default);
app.use('/api/diagnoses', diagnoses_1.default);
const PORT = process.env.PORT || 3001;
app.get('/api/ping', (_req, res) => {
    res.send('pong');
});
// eslint-disable-next-line @typescript-eslint/require-await
app.use(express_1.default.static('build'));
app.listen(PORT, () => {
    console.log(`server started in port ${PORT}`);
});
