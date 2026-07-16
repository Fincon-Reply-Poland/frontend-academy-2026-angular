import { NgForm, NgModel } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';
import { UserFormComponent } from './user-form.component';

describe(UserFormComponent.name, () => {
  it('łączy pola formularza z właściwościami przez ngModel', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    fixture.detectChanges();
    const controls = fixture.debugElement.queryAll(By.directive(NgModel));

    controls[0].injector.get(NgModel).viewToModelUpdate('Katherine Johnson');
    controls[1].injector.get(NgModel).viewToModelUpdate('katherine@example.com');
    fixture.detectChanges();

    expect(fixture.componentInstance.name).toBe('Katherine Johnson');
    expect(fixture.componentInstance.email).toBe('katherine@example.com');
  });

  it('emituje dane poprawnego formularza', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const spy = vi.fn();
    const resetForm = vi.fn();
    fixture.componentInstance.userCreated.subscribe(spy);
    fixture.componentInstance.name = 'Katherine Johnson';
    fixture.componentInstance.email = 'katherine@example.com';

    fixture.componentInstance.submit({ invalid: false, resetForm } as unknown as NgForm);

    expect(spy).toHaveBeenCalledWith({
      name: 'Katherine Johnson',
      email: 'katherine@example.com',
    });
    expect(resetForm).toHaveBeenCalled();
  });

  it('nie emituje pustego formularza', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const spy = vi.fn();
    fixture.componentInstance.userCreated.subscribe(spy);

    fixture.componentInstance.submit({ invalid: true } as NgForm);

    expect(spy).not.toHaveBeenCalled();
  });
});
