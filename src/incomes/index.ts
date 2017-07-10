import { Definition } from '../generics';

export class IncomeCategory extends Definition {
  order: number;
  types?: IncomeType[];
}

export class IncomeType extends Definition {
  category: IncomeCategory;
  order: number;
  value?: number;
  note?: string;
}
