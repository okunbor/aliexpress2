import { User } from "./user";

export interface AuthToken {
    // common
    server_id: string;
    token: string;
    refreshToken: string;
    expired_in: number;
  }
  export interface RenewTokenDTO extends Pick<AuthToken, "token" | "refreshToken"> {}
  export interface RenewTokenResponse
    extends Pick<AuthToken, "token" | "refreshToken" | "expired_in"> {}
  
  export interface AuthData extends AuthToken {
    initialized?: boolean;
    user: User;
  }

  export interface AuthResponse extends AuthToken {
    initialized?: boolean;
    user: User;
  }

export type { User };
