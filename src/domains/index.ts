import { Definition } from '../generics';

export class Domain extends Definition {
    credit?: number;
    mobileNumber: string;
    emailAddress: string;
    externals?: string[];
    prefix: string;
}

export class DomainCredit {
    id?: string;
    domain: Domain;
    type: string;
    value: number;
    note: string;
    created: string;
}

export class DomainTemplate extends Definition {
  domain: Domain;
  templateType: string;
  content: string;
  subject?: string;
}
