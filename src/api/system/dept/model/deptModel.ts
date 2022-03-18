import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export interface DeptListItem {
  id: number;
  label: string;
  children: DeptListItem[];
}

export type DeptSearchPagedParams = BasicPageParams & {
  name: string;
  account: string;
};

export interface DeptListItem {
  ParentId?: number;
  Name?: string;
  Levels: number;
  IsMenu: boolean;
  IsMenuName: string;
  Status: number;
  StatusName: string;
  Ordinal: number;
  Url: string;
  Path: string;
  Icon: string;
  Code: string;
  PCode: string;
  Component: string;
  Hidden: boolean;
  Children: DeptListItem[];
}

export type RolePageListGetResultModel = BasicFetchResult<DeptListItem>;
