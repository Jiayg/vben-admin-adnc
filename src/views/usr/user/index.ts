import { changeStatus } from '/@/api/system/user';
import { GetRolesTree } from '/@/api/system/role';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { Switch, Tag } from 'ant-design-vue';
import { h } from 'vue';
import { useMessage } from '/@/hooks/web/useMessage';

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
    dataIndex: 'sex',
    width: 80,
    customRender: ({ record }) => {
      const value = record as any;
      const enable = value.sex === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '男' : '女';
      return h(Tag, { color: color }, () => text);
    },
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
    dataIndex: 'status',
    customRender: ({ record }) => {
      const value = record as any;
      if (!Reflect.has(value, 'pendingStatus')) {
        value.pendingStatus = false;
      }
      return h(Switch, {
        checked: value.status === 1,
        checkedChildren: '启用',
        unCheckedChildren: '禁用',
        loading: value.pendingStatus,
        onChange(checked: boolean) {
          value.pendingStatus = true;
          const newStatus = checked ? 1 : 0;
          const { createMessage } = useMessage();
          changeStatus(value.id, newStatus)
            .then(() => {
              value.status = newStatus;
              createMessage.success(`已成功修改角色状态`);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败');
            })
            .finally(() => {
              value.pendingStatus = false;
            });
        },
      });
    },
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
    label: '账户名',
    component: 'Input',
    helpMessage: ['不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.response.data.detail || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    required: true,
  },
  {
    field: 'sex',
    label: '性别',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '男',
          value: 1,
        },
        {
          label: '女',
          value: 2,
        },
      ],
    },
    defaultValue: 1,
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
    required: true,
  },
  {
    label: '生日',
    field: 'birthday',
    component: 'DatePicker',
    required: true,
  },
  {
    label: '角色',
    field: 'role',
    component: 'Select',
    componentProps: {
      api: GetRolesTree,
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
        label: 'label',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 0,
        },
      ],
    },
    defaultValue: 1,
  },
];
