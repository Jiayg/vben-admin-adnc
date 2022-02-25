import { defHttp } from '/@/utils/http/axios';
import { USerPageListGetResultModel, UserSearchPagedParams } from './model/userNewModel';

enum Api {
  UsrPrefix = '/usr/users',
  GetUser = '/usr/users',
  IsAccountExist = '/usr/users/accountExist',
}

export function getUserList(params: UserSearchPagedParams) {
  return defHttp.get<USerPageListGetResultModel>({ url: Api.GetUser, params });
}

export const changeStatus = (id: number, status: number) =>
  defHttp.put({ url: `${Api.UsrPrefix}/${id}/status`, params: { value: status } });

export function isAccountExist(account: string) {
  return defHttp.get<boolean>({ url: Api.IsAccountExist, params: { value: account } });
}
