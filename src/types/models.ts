export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  image_url: string;
  storage_used: number;
  storage_limit: number;
  created_at: string;
  updated_at: string;
}

export interface Folder {
  id: string;
  name: string;
  user_id: string;
  parent_id: string | null;
  path: string;
  is_starred: boolean;
  is_trashed: boolean;
  created_at: string;
  updated_at: string;
}

export interface File {
  id: string;
  name: string;
  user_id: string;
  folder_id: string;
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
}
