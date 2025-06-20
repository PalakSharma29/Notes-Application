export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export type AuthResponse = {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
};