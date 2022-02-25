import { defHttp } from '/@/utils/http/axios';
import { RoleTreeModel } from './model/roleModel';

enum Api {
  UsrPrefix = '/usr/roles',
}

export const GetRolesTree = (params?: any) =>
  defHttp.get<RoleTreeModel>({
    url: `${Api.UsrPrefix}/${params.id}/rolestree`,
  });
