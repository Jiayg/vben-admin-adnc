import { defHttp } from '/@/utils/http/axios';
import { USerPageListGetResultModel, UserSearchPagedParams } from './model/userNewModel';

enum Api {
  GetUser = '/usr/users',
}

export const getUserList = (params: UserSearchPagedParams) => {
  return defHttp.get<USerPageListGetResultModel>({ url: Api.GetUser, params });
};
