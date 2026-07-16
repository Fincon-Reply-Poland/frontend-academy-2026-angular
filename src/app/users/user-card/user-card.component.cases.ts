import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { createUser } from '../testing/user.fixture';
import { UserCardComponent } from './user-card.component';

describe(UserCardComponent.name, () => {
  it('wyświetla użytkownika przekazanego przez Input', () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    fixture.componentRef.setInput('user', createUser({ name: 'Grace Hopper' }));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Grace Hopper');
  });

  it('emituje użytkownika przez Output po kliknięciu', () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    const user = createUser();
    const spy = vi.fn();
    fixture.componentRef.setInput('user', user);
    fixture.componentInstance.userSelected.subscribe(spy);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(spy).toHaveBeenCalledWith(user);
  });

  it('używa property bindingu do klasy selected', () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    fixture.componentRef.setInput('user', createUser());
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').classList).toContain('selected');
  });
});
