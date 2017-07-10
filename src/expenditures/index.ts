import { Definition } from '../generics';

export class ExpenditureCategory extends Definition {
  order: number;
  types?: ExpenditureType[];
}

export class ExpenditureType extends Definition {
  category: ExpenditureCategory;
  minimum?: number = 0;
  maximum?: number = 0;
  dependantExtraMinimum?: number = 0;
  dependantExtraMaximum?: number = 0;
  order: number;
  value?: number;
  note?: string;
}
