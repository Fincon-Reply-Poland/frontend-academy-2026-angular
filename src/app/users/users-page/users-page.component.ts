import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { User } from '../models/user.model';
import { UsersFilterService } from '../services/users-filter.service';
import { UsersService } from '../services/users.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { NewUserData, UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserSearchComponent } from '../user-search/user-search.component';

@Component({
  selector: 'app-users-page',
  imports: [DatePipe, UserSearchComponent, UserListComponent, UserDetailsComponent, UserFormComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  private readonly usersFilter = inject(UsersFilterService);

  readonly users = signal<User[]>([]);
  readonly query = signal('');
  readonly selectedUser = signal<User | null>(null);
  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  readonly filteredUsers = computed(() => {
    // TODO: wylicz listę z users(), query() i UsersFilterService.
    void this.usersFilter;
    return this.users();
  });

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.selectedUser.set(null);
      },
      error: () => {
        this.errorMessage.set('Nie udało się pobrać użytkowników.');
        this.isLoading.set(false);
      },
      complete: () => this.isLoading.set(false),
    });
  }

  selectUser(user: User): void {
    // TODO: zapisz wybranego użytkownika w signal.
    void user;
  }

  addUser(data: NewUserData): void {
    // TODO: zbuduj lokalnego Usera i dodaj go przez users.update(...).
    void data;
  }
}
