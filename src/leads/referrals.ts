import { Lead } from '../leads'
import { External } from '../externals';
import { User } from '../users';

export class LeadReferralNote {
  id?: string;
  lead: number;
  external: External;
  user: User;
  note: string;
  created: string;
  highlighted: boolean;
}

export class LeadReferralTimeline {
  id?: string;
  lead: number;
  external: External;
  user: User;
  message: string;
  created: string;
}
