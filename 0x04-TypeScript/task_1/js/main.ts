// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [PotentialProperty: string]: any;
};

// Define the Directors interface
export interface Directors extends Teacher {
  numberOfReports: number;
}; 

// Define the Teacher function interface
export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// define the function printTeacher
export const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`
};

interface StudentInterface {
  _firstName: string;
  _lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// define class StudentClass
export class StudentClass implements StudentInterface {
  _firstName: string;
  _lastName: string;

  constructor(firstname: string, lastname: string) {
    this._firstName = firstname;
    this._lastName = lastname;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }

}
