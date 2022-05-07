import { defHttp } from '/@/utils/http/axios';
import {
  RoleTreeModel,
  RoleSearchPagedParams,
  RolePageListGetResultModel,
} from './model/roleModel';

enum Api {
  Roles = '/usr/roles',
}
export function getRoleList(params: RoleSearchPagedParams) {
  return defHttp.get<RolePageListGetResultModel>({ url: Api.Roles, params });
}

export const GetRolesTree = (params?: any) =>
  defHttp.get<RoleTreeModel>({
    url: `${Api.Roles}/${params.id}/rolestree`,
  });
