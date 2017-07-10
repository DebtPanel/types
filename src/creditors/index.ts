import { Definition } from '../generics';
import { Portfolio } from '../portfolios'

export class CreditType extends Definition { }

export class Creditor extends Definition {
  department?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  town?: string;
  county?: string;
  postalCode?: string;
  email?: string;
  telephone?: string;
  fax?: string;
  bankAccountName?: string;
  bankAccountNumber?: string;
  bankSortCode?: string;
  notes?: string;
  portfolio?: Portfolio;
}
