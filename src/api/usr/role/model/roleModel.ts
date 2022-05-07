import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export interface RoleTreeModel {
  checkedIds: [];
  treeData: Node[];
}

export interface Node {
  id: number;
  pid: number;
  name: string;
  checked: boolean;
  children: [];
}

export type RoleSearchPagedParams = BasicPageParams & {
  roleName: string;
};

export interface RoleListItem {
  name: string;
  ordinal: number;
  permissions?: string;
  pid?: number;
  tips: string;
}

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;
