import { TestBed } from '@angular/core/testing';
import { createUser } from '../testing/user.fixture';
import { UsersFilterService } from './users-filter.service';

describe(UsersFilterService.name, () => {
  const ada = createUser({ id: 1, name: 'Ada Lovelace', email: 'ada@example.com' });
  const jan = createUser({ id: 2, name: 'Jan Kowalski', email: 'jan@example.com' });

  it('jest dostarczany przez Dependency Injection', () => {
    const service = TestBed.inject(UsersFilterService);
    expect(service).toBeInstanceOf(UsersFilterService);
  });

  it('filtruje po nazwie bez względu na wielkość liter', () => {
    const service = TestBed.inject(UsersFilterService);
    expect(service.filter([ada, jan], 'ADA')).toEqual([ada]);
  });

  it('filtruje po adresie e-mail', () => {
    const service = TestBed.inject(UsersFilterService);
    expect(service.filter([ada, jan], 'jan@example')).toEqual([jan]);
  });

  it('dla pustego zapytania zwraca wszystkich użytkowników', () => {
    const service = TestBed.inject(UsersFilterService);
    expect(service.filter([ada, jan], '   ')).toEqual([ada, jan]);
  });
});
