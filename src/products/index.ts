import { Definition } from '../generics';

export class ProductQuestion {
  id?: string;
  product: Product;
  question: string;
  positiveRank: number;
  negativeRank: number;

  // decision: LeadDecision;
}

export class Product extends Definition {
  questions: ProductQuestion[];
}
