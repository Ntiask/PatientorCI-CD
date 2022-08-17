import DiagnoseEntries from '../../data/diagnosesJSON';
import { DiagnoseEntry } from '../types/DiagnoseEntry';

const getDiagnoses = (): Array<DiagnoseEntry> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return DiagnoseEntries;
  };
  
  const addDiagnose = () => {
    return null;
  };
  
  export default {
    getDiagnoses,
    addDiagnose
  };