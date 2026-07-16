# Frontend Academy — Angular Homework

## Cel

Doprowadź testy do stanu zielonego **bez edytowania plików `*.cases.ts` ani `all.spec.ts`**.

Pobieranie użytkowników z API jest już gotowe — nie zmieniaj `UsersService` ani metody `loadUsers()`.

---

## Zadania

Szukaj komentarzy `// TODO` w plikach — każdy wskazuje dokładnie co wpisać.

### 1. Routing — `app.routes.ts`

Dodaj trasę `{ path: 'about', component: AboutPageComponent }` do tablicy `routes`.

---

### 2. Service — `users/services/users-filter.service.ts`

Zaimplementuj metodę `filter(users: User[], query: string): User[]`.  
Zwróć tylko tych użytkowników, których `name` **lub** `email` zawiera `query` (porównanie bez uwzględniania wielkości liter).  
Gdy `query` jest pusty, zwróć wszystkich użytkowników.

---

### 3. Signals + computed — `users/users-page/users-page.component.ts`

W tym pliku są trzy miejsca do uzupełnienia:

- **`filteredUsers` (computed):** użyj `UsersFilterService.filter()`, przekazując `users()` i `query()` — wynik ma być obliczany reaktywnie.
- **`selectUser(user)`:** zapisz przekazanego użytkownika do sygnału `selectedUser`.
- **`addUser(data)`:** zbuduj obiekt `User` (nadaj unikalne `id`, np. `Date.now()`), a następnie dodaj go do listy przez `users.update(list => [...list, newUser])`.

---

### 4. Input / Output — `users/user-card/user-card.component.ts`

W metodzie `onClick()` wyemituj aktualnego użytkownika (`this.user()`) przez output `userSelected`.

---

### 5. Propagacja eventu — `users/user-list/user-list.component.ts`

W metodzie obsługującej `userSelected` z `UserCardComponent` wyemituj otrzymanego użytkownika dalej — przez własny output `userSelected` komponentu listy.

---

### 6. `@for` / `@empty` — `users/user-list/user-list.component.html`

Zastąp istniejący komentarz pętlą `@for (user of users(); track user.id)` renderującą `<app-user-card>`.  
Dodaj blok `@empty` z komunikatem o braku wyników.

---

### 7. `@if` + pipes — `users/user-details/user-details.component.html`

Wyświetl szczegóły wybranego użytkownika albo komunikat zastępczy:

- gdy `user()` istnieje (`@if`) — pokaż `name` przez `| titlecase`, `email` przez `| lowercase`, `username` przez `| uppercase`,
- w bloku `@else` — wyświetl dowolny tekst informujący o braku zaznaczenia.

---

### 8. Formularz — `users/user-form/user-form.component.html` i `.ts`

**HTML:** w formularzu (`#form="ngForm"`, `(ngSubmit)`) dodaj dwa pola:

| pole | `name` atrybutu | walidacja          |
|------|-----------------|--------------------|
| Name | `name`          | `required`         |
| Email| `email`         | `required`, `email`|

Każde pole powiąż przez `[(ngModel)]` z odpowiednim polem obiektu `formData`.  
Przy nieprawidłowym polu (touched + invalid) pokaż komunikat błędu (`*ngIf` lub `@if`).  
Przycisk submit powinien być zablokowany (`[disabled]="form.invalid"`).

**TS (`onSubmit`):** jeśli formularz jest prawidłowy — wyemituj `formData` przez output `userSubmit`, a następnie wyczyść formularz (`form.resetForm()`).

---

## Komendy

```bash
npm ci
npm test
npm start
```

---

## Co jest już gotowe?

- konfiguracja Angulara 22,
- pobieranie użytkowników z API (`UsersService.loadUsers()`),
- loading i error handling w `UsersPageComponent`,
- sygnały `users`, `query`, `selectedUser` w `UsersPageComponent`,
- `UserSearchComponent` z `model()` i bindingiem `[(query)]`,
- modele danych (`User`),
- style CSS,
- komponent `AboutPageComponent`,
- testy (Vitest) i pliki `*.cases.ts`.

---

## Wymagana wersja Node.js

Użyj Node.js **24.15.0** (pliki `.nvmrc` i `.node-version` są w projekcie).
