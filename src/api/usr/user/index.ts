import { defHttp } from '/@/utils/http/axios';
import { UserPageListGetResultModel, UserSearchPagedParams } from './model/userNewModel';

enum Api {
  Users = '/usr/users',
  AccountExist = '/accountExist',
}

export function getUserList(params: UserSearchPagedParams) {
  return defHttp.get<UserPageListGetResultModel>({ url: Api.Users, params });
}

export const changeStatus = (id: number, status: number) =>
  defHttp.put({ url: `${Api.Users}/${id}/status`, params: { value: status } });

export function isAccountExist(account: string) {
  return defHttp.get<boolean>({ url: Api.Users + Api.AccountExist, params: { value: account } });
}
