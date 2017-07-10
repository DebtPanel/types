import { Vehicle, Address } from '../generics';
import { User } from '../users';
import { Domain } from '../domains';
import { Stage, Status } from '../statuses';
import { Campaign } from '../introducers';
import { External } from '../externals';
import { Product } from '../products';
import { Task } from '../tasks';
import { LeadPerson } from './people';
import { Creditor, CreditType } from '../creditors';
import { Asset } from '../assets';
import { LeadReferralNote, LeadReferralTimeline } from './referrals';

export * from './people';
export * from './referrals';

export class Lead {
  id?: string;
  user: User;
  domain: Domain;
  campaign?: Campaign;
  stage: Stage;
  status: Status;
  people: LeadPerson[];

  meta?: any;
  referredTo: External;
  referredFor: Product;
  referralStatus: Status;
  referralNotes: LeadReferralNote[];
  referralTimeline: LeadReferralTimeline[];
  createdAt: string;
  clientId: string;
}

export class LeadVehicle {
  id?: string;
  lead: Lead;
  registration: string;
  vehicle: Vehicle;
  value: number;
  owner: string;
  applicant: LeadPerson;
  note: string;
}

export class LeadTimeline {
  id?: string;
  lead: Lead;
  user: User;
  message: string;
  created: string;
}

export class LeadNote {
  id?: string;
  lead: Lead;
  user: User;
  note: string;
  created: string;
  highlighted: boolean;
}

export class LeadExternalComparison {
    id?: string;
    external: External;
    rating: number;
    ratingCount: number;
    commission: number;
    commissionType: string;
    clawback: boolean;
}

export class LeadTask {
  id?: string;
  lead: Lead;
  task: Task;
  user: User;
  note: string;
  date: string;
  time: string;
  completed: boolean;
}

export class LeadProperty extends Address {
    id?: string;
    lead: Lead;
    status: string;
    propertyType: string;
    years: number;
    months: number;
    note: string;
    value: number;
    mortgageBalance: number;
    owner: string;
}

export class LeadDependant {
  id?: string;
  lead: Lead;
  dateOfBirth: string;
}

export class LeadDecision {
  id?: string;
  lead: Lead;
  question: number;
  decision: boolean;
  locked: boolean;
}

export class LeadCreditor {
  id?: string;
  lead: string;
  reference: string;
  type: CreditType;
  secured: boolean;
  creditor: Creditor|string;
  source: string;
  applicant: LeadPerson;
  owner: string;
  value: number;
  status: string;
  note: string;
}

export class LeadAsset {
  id?: string;
  lead: number;
  type: Asset;
  note: string;
  value: number;
  owner: string;
  applicant: LeadPerson;
}
