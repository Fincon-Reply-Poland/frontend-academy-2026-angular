import { TestBed } from '@angular/core/testing';
import { createUser } from '../testing/user.fixture';
import { UserDetailsComponent } from './user-details.component';

describe(UserDetailsComponent.name, () => {
  it('pokazuje @else, gdy nie wybrano użytkownika', () => {
    const fixture = TestBed.createComponent(UserDetailsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Wybierz użytkownika');
  });

  it('pokazuje szczegóły przez @if i formatuje dane pipe’ami', () => {
    const fixture = TestBed.createComponent(UserDetailsComponent);
    fixture.componentRef.setInput('user', createUser({
      name: 'ada lovelace',
      email: 'ADA@EXAMPLE.COM',
      company: { name: 'analytical engines' },
    }));
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Ada Lovelace');
    expect(text).toContain('ada@example.com');
    expect(text).toContain('ANALYTICAL ENGINES');
  });
});
