import { Component, input, output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input.required<User>();
  selected = input(false);
  userSelected = output<User>();

  selectUser(): void {
    // TODO: wyemituj użytkownika przez userSelected.
  }
}
