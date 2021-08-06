export interface UserModel {
  id?: number;
  name: string;
  email: string;
  password: string;
  refreshToken?: string;
  agents?: any[];
  roles?: any[];
}
