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
