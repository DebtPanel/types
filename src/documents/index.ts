import { Definition } from '../generics';

export class Document extends Definition {
  required: boolean;
  prefix: string;
  documentLink?: string;
}
