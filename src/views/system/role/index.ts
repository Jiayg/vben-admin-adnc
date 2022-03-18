import { BasicColumn, FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: '角色名',
    dataIndex: 'name',
  },
  {
    title: '序号',
    dataIndex: 'ordinal',
  },
  {
    title: '角色描述',
    dataIndex: 'tips',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'RoleName',
    label: '角色名',
    component: 'Input',
    colProps: { span: 8 },
  },
];
