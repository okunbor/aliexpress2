

export type Gender = 0 | 1;


export interface User {
    uid: number;
    id :number;
    email: string;
    name: string;
    gender: Gender;
    language?: string;
    is_admin: boolean;
    avatar_updated_at: number;
    create_by: string;
    webhook_url?: string;
    is_bot?: boolean;
    log_id?: number;
  }
