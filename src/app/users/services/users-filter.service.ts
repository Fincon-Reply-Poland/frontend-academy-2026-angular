import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersFilterService {
  filter(users: readonly User[], query: string): User[] {
    // TODO: filtruj po name lub email, ignorując wielkość liter.
    void query;
    return [...users];
  }
}
