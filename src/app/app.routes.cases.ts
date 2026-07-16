import { AboutPageComponent } from './about/about-page.component';
import { routes } from './app.routes';

describe('routes', () => {
  it('udostępnia widok użytkowników pod /users', () => {
    expect(routes.some((route) => route.path === 'users' && route.component)).toBe(true);
  });

  it('udostępnia prostą trasę /about', () => {
    expect(routes).toContainEqual({ path: 'about', component: AboutPageComponent });
  });

  it('przekierowuje nieznane adresy do /users', () => {
    expect(routes.at(-1)).toMatchObject({ path: '**', redirectTo: 'users' });
  });
});
