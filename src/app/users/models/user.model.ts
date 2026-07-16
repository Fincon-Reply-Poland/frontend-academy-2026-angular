export interface User {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly website: string;
  readonly address: {
    readonly city: string;
  };
  readonly company: {
    readonly name: string;
  };
}
