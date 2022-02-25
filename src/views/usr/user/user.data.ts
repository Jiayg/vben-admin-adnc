import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '账号',
    dataIndex: 'account',
    width: 100,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '性别',
    dataIndex: 'sexName',
    width: 100,
  },
  {
    title: '角色',
    dataIndex: 'roleNames',
    width: 180,
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    width: 100,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'statusName',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '账户',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pwd',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    label: '角色',
    field: 'role',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'roleValue',
    },
    required: true,
  },
  {
    field: 'dept',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
