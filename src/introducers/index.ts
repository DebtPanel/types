import { Definition } from '../generics';
import { Domain } from '../domains';

export class Introducer extends Definition {
    domain: Domain;
}

export class Campaign extends Definition {
  description: string;
  domain: Domain;
  introducer: Introducer;
  apiKey: string;
}
