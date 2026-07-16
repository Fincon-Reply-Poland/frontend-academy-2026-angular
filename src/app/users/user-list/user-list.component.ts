import { Component, input, output } from '@angular/core';
import { User } from '../models/user.model';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = input<readonly User[]>([]);
  selectedUserId = input<number | null>(null);
  userSelected = output<User>();

  selectUser(user: User): void {
    // TODO: przekaż event z UserCard do UsersPage.
    void user;
  }
}
