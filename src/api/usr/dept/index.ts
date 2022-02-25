import { defHttp } from '/@/utils/http/axios';
import { DeptListItem } from './model/deptModel';

enum Api {
  UsrPrefix = '/usr/depts',
  GetDeptsTree = '/usr/depts/deptTreeList',
}

export const GetDeptTreeList = () =>
  defHttp.get<DeptListItem>({
    url: Api.GetDeptsTree,
  });
