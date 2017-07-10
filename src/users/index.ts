import { Definition } from '../generics';
import { Domain } from '../domains';

export class UserPermission extends Definition {
  description: string;
}

export class User extends Definition {
  email: string;
  password?: string;
  domain: Domain;
  permissions: UserPermission[];
  disabledAt: string;
}
