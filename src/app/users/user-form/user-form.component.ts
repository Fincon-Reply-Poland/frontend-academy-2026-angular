import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface NewUserData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  name = '';
  email = '';
  userCreated = output<NewUserData>();

  submit(form: NgForm): void {
    // TODO: jeżeli formularz jest poprawny, wyemituj name/email i wyczyść formularz.
    void form;
  }
}
