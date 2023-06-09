export interface ISignUp {
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface userInfo {
  key: string;
  secret: string;
}

export interface AuthSate {
  id?: number;
  name?: string;
  email?: string;
  key?: string;
  secret?: string;
}
