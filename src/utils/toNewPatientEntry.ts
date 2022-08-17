import { NewPatientEntry, gender, Entry  } from "../types/PatientEntry";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

const parseString = (string: unknown): string => {
    if (!string || !isString(string)) {
        throw new Error('Incorrect or missing comment');
      }

    return string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is gender => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(gender).includes(param);
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEntries = (param: any): param is Entry[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Array.isArray(param);

};

const parseGender = (x: unknown): gender => {
    if (!x || !isGender(x)) {
        throw new Error('Incorrect or missing gender: ' + x);
    }
    return x;
  };

  const parseEntries = (x: unknown): Entry[] => {
    if (!x || !isEntries(x)) {
        throw new Error('Incorrect or missing gender: ' + x);
    }
    return x;
  };

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown, entries: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation, entries } : Fields): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseString(name),
    dateOfBirth: parseString(dateOfBirth),
    ssn: parseString(ssn),
    gender: parseGender(gender),
    occupation: parseString(occupation),
    entries: parseEntries(entries)
  };

  return newEntry;
};

export default toNewPatientEntry;