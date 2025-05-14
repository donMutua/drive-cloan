export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      files: {
        Row: {
          id: string;
          name: string;
          user_id: string;
          folder_id: string | null;
          type: string;
          size: number;
          cloudinary_id: string;
          cloudinary_url: string;
          thumbnail_url: string | null;
          path: string;
          is_starred: boolean;
          is_trashed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          user_id: string;
          folder_id?: string | null;
          type: string;
          size: number;
          cloudinary_id: string;
          cloudinary_url: string;
          thumbnail_url?: string | null;
          path: string;
          is_starred?: boolean;
          is_trashed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          user_id?: string;
          folder_id?: string | null;
          type?: string;
          size?: number;
          cloudinary_id?: string;
          cloudinary_url?: string;
          thumbnail_url?: string | null;
          path?: string;
          is_starred?: boolean;
          is_trashed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      folders: {
        Row: {
          id: string;
          name: string;
          user_id: string;
          parent_id: string | null;
          path: string;
          is_starred: boolean;
          is_trashed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          user_id: string;
          parent_id?: string | null;
          path: string;
          is_starred?: boolean;
          is_trashed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          user_id?: string;
          parent_id?: string | null;
          path?: string;
          is_starred?: boolean;
          is_trashed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          image_url: string;
          storage_used: number;
          storage_limit: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name?: string;
          last_name?: string;
          image_url?: string;
          storage_used?: number;
          storage_limit?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string;
          last_name?: string;
          image_url?: string;
          storage_used?: number;
          storage_limit?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      decrement_storage: {
        Args: {
          amount: number;
        };
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
