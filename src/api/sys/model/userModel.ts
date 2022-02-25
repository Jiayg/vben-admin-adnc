/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  token: string;
  refreshToken: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  id: number;
  profile: ProfileInfo;
  roles: [];
  permissions: [];
  homePath: string;
}
export interface ProfileInfo {
  account: string;
  avatar: string;
  birthday: string;
  deptId: number | string;
  deptFullName: string;
  email: string;
  name: string;
  phone: string;
  roleIds: [];
  roles: [];
  sex: number;
  status: number;
}
