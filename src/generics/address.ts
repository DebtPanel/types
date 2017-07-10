import { Definition } from '../generics';

export class Country extends Definition { }

export class Address {
  id?: string;
  person: number;
  address1: string;
  address2: string;
  address3: string;
  town: string;
  county: string;
  postalCode: string;
  country: Country;
}
