export interface User {
  id: string;
  email: string;
  name: string | null;
  picture_url: string | null;
}

export interface SessionResponse {
  user: User;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
