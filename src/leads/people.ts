import { Definition, Address } from '../generics';
import { ResidentialStatus } from '../statuses';

export class LeadPersonAddress extends Address { }

export class LeadPersonTitle extends Definition { }

export class LeadPersonContactDetail {
  id?: string;
  person: number;
  type: string;
  value: string;
}

export class LeadPerson {
  id?: string;
  lead: number;
  title: LeadPersonTitle;
  firstName: string;
  middleNames: string;
  lastName: string;
  maidenName: string;
  dateOfBirth: string;
  gender: string;
  address: LeadPersonAddress[];
  contactDetails: LeadPersonContactDetail[];
  residentialStatus: ResidentialStatus;

  employmentStatus: string;
  occupation: string;
  employer: string;
}
