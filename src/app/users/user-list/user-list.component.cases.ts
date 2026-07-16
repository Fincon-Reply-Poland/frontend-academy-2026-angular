import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { createUser } from '../testing/user.fixture';
import { UserListComponent } from './user-list.component';

describe(UserListComponent.name, () => {
  it('pokazuje pusty stan przez @empty', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', []);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Brak użytkowników');
  });

  it('renderuje kartę dla każdego elementu przez @for', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', [createUser({ id: 1 }), createUser({ id: 2 })]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-user-card')).toHaveLength(2);
  });

  it('przekazuje Output dziecka do rodzica', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const user = createUser();
    const spy = vi.fn();
    fixture.componentRef.setInput('users', [user]);
    fixture.componentInstance.userSelected.subscribe(spy);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(spy).toHaveBeenCalledWith(user);
  });
});
