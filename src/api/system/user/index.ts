import { defHttp } from '/@/utils/http/axios';
import { UserPageListGetResultModel, UserSearchPagedParams } from './model/userNewModel';

enum Api {
  UsrPrefix = '/users',
  GetUser = '/users',
  IsAccountExist = '/users/accountExist',
}

export function getUserList(params: UserSearchPagedParams) {
  return defHttp.get<UserPageListGetResultModel>({ url: Api.GetUser, params });
}

export const changeStatus = (id: number, status: number) =>
  defHttp.put({ url: `${Api.UsrPrefix}/${id}/status`, params: { value: status } });

export function isAccountExist(account: string) {
  return defHttp.get<boolean>({ url: Api.IsAccountExist, params: { value: account } });
}
