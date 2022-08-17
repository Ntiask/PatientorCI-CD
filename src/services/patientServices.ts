
import PatientEntries from '../../data/patientsJSON';
import {gender, NonSensitivePatientEntry, PatientEntry } from '../types/PatientEntry';
import {v4 as uuidv4} from 'uuid';
import { Entry } from '../types/PatientEntry';

const getPatients = (): Array<NonSensitivePatientEntry> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return PatientEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    }));
  };
  
  
const getInvidualPatient = (): Array<PatientEntry> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return PatientEntries.map(({ id, name, dateOfBirth, gender, occupation, ssn, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      ssn,
      entries
    }));
  };

  const addPatient = (
    name: string, 
    dateOfBirth: string, 
    gender: gender,
    occupation: string,
    ssn: string,
    entries: Entry[]
    ): PatientEntry => {
    const NewPatientEntry = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      id: uuidv4(),
      name,
      dateOfBirth,
      ssn,
      gender,
      occupation,
      entries
    };
    PatientEntries.push(NewPatientEntry);
    return NewPatientEntry;
  };

  const AddEntry = (
    UserId: string,
    entry: Entry
    ): PatientEntry => {
    entry.id = uuidv4();
    PatientEntries.filter(patient => patient.id === UserId)[0].entries.unshift(entry);
    return PatientEntries.filter(patient => patient.id === UserId)[0];
  };
  
  export default {
    getPatients,
    addPatient,
    getInvidualPatient,
    AddEntry
  };