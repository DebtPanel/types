import { Definition } from '../generics';
import { Domain } from '../domains'

export class Stage extends Definition {
  description: string;
}

export class Status extends Definition {
  domain?: Domain;
}

export class ResidentialStatus extends Definition { }
