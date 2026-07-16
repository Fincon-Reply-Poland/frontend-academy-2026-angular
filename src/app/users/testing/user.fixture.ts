import { User } from '../models/user.model';

export function createUser(overrides: Partial<User> = {}): User {
  return {
    id: 1,
    name: 'Ada Lovelace',
    username: 'ada',
    email: 'ada@example.com',
    phone: '123 456 789',
    website: 'ada.dev',
    address: { city: 'London' },
    company: { name: 'Analytical Engines' },
    ...overrides,
  };
}
