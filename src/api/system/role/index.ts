import { defHttp } from '/@/utils/http/axios';
import {
  RoleTreeModel,
  RoleSearchPagedParams,
  RolePageListGetResultModel,
} from './model/roleModel';

enum Api {
  UsrPrefix = '/roles',
}
export function getRoleList(params: RoleSearchPagedParams) {
  return defHttp.get<RolePageListGetResultModel>({ url: Api.UsrPrefix, params });
}

export const GetRolesTree = (params?: any) =>
  defHttp.get<RoleTreeModel>({
    url: `${Api.UsrPrefix}/${params.id}/rolestree`,
  });
