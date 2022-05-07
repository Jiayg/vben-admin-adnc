import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Session = '/usr/session',
}

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Session,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.Session }, { errorMessageMode: 'none' });
}

export function doLogout() {
  return defHttp.delete({ url: Api.Session });
}
