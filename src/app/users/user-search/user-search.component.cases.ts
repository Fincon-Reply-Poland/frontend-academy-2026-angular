import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';

@Component({
  imports: [UserSearchComponent],
  template: `<app-user-search [(query)]="query" />`,
})
class SearchHostComponent {
  readonly query = signal('');
}

describe(UserSearchComponent.name, () => {
  it('synchronizuje model() z sygnałem rodzica przez two-way binding', async () => {
    const fixture = TestBed.createComponent(SearchHostComponent);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'Ada';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance.query()).toBe('Ada');
  });
});
