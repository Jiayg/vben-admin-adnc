import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type UserSearchPagedParams = BasicPageParams & {
  name: string;
  account: string;
};

export interface UserListItem {
  account: string;
  avatar: string;
  birthday: string;
  deptId?: number;
  deptName: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  roleIds: string;
  roleNames: string;
  sex?: number;
  sexName: string;
  status?: number;
  statusName: string;
}

export type USerPageListGetResultModel = BasicFetchResult<UserListItem>;
