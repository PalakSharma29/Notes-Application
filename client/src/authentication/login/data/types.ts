export type AuthResponse = {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
};