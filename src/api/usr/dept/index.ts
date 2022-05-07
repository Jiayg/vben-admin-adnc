import { defHttp } from '/@/utils/http/axios';
import { DeptListItem } from './model/deptModel';

enum Api {
  Depts = '/usr/depts',
  TreeList = '/deptTreeList',
}
export function getRoleList() {
  return defHttp.get<DeptListItem>({ url: Api.Depts });
}
export const GetDeptTreeList = () =>
  defHttp.get<DeptListItem>({
    url: Api.Depts + Api.TreeList,
  });
