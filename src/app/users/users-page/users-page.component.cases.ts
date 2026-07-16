import { isSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { createUser } from '../testing/user.fixture';
import { UsersService } from '../services/users.service';
import { UsersPageComponent } from './users-page.component';

describe(UsersPageComponent.name, () => {
  const ada = createUser({ id: 1, name: 'Ada Lovelace', email: 'ada@example.com' });
  const jan = createUser({ id: 2, name: 'Jan Kowalski', email: 'jan@example.com' });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: UsersService, useValue: { getUsers: () => of([ada, jan]) } }],
    });
  });

  it('używa signals do stanu i computed do listy pochodnej', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    expect(isSignal(fixture.componentInstance.users)).toBe(true);
    expect(isSignal(fixture.componentInstance.query)).toBe(true);
    expect(isSignal(fixture.componentInstance.selectedUser)).toBe(true);
    expect(isSignal(fixture.componentInstance.filteredUsers)).toBe(true);
  });

  it('gotowe pobieranie wypełnia sygnał users', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.users()).toEqual([ada, jan]);
  });

  it('computed aktualizuje listę po zmianie query', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.query.set('ADA');
    expect(fixture.componentInstance.filteredUsers()).toEqual([ada]);
  });

  it('zapisuje wybranego użytkownika w signal', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    fixture.componentInstance.selectUser(ada);
    expect(fixture.componentInstance.selectedUser()).toEqual(ada);
  });

  it('dodaje użytkownika przesłanego z prostego formularza', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.addUser({ name: 'Grace Hopper', email: 'grace@example.com' });
    expect(fixture.componentInstance.users().at(-1)).toMatchObject({
      name: 'Grace Hopper',
      email: 'grace@example.com',
    });
  });
});
