import { defHttp } from '/@/utils/http/axios';
import { DeptListItem } from './model/deptModel';

enum Api {
  UsrPrefix = '/depts',
  GetDeptsTree = '/depts/deptTreeList',
}
export function getRoleList() {
  return defHttp.get<DeptListItem>({ url: Api.UsrPrefix });
}
export const GetDeptTreeList = () =>
  defHttp.get<DeptListItem>({
    url: Api.GetDeptsTree,
  });
