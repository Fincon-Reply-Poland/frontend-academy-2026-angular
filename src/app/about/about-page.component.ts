import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <main class="about-page">
      <p class="eyebrow">Routing</p>
      <h1>About Users App</h1>
      <p>Mała aplikacja do ćwiczenia fundamentów Angulara.</p>
    </main>
  `,
  styles: [`
    .about-page { width: min(960px, calc(100% - 32px)); margin: 0 auto; padding: 56px 0; }
    .eyebrow { color: #d88cff; font-weight: 700; text-transform: uppercase; }
  `],
})
export class AboutPageComponent {}
