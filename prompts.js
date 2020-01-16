module.exports = [
  {
    type: 'list', // 即类型为 选择项
    name: 'typeScript', // 名称，作为下面 generator 函数 options 的键
    message: '是否使用typeScript', // 提示语
    choices: [
      { name: '是', value: 'true' },
      { name: '否', value: 'false' }
    ],
    default: 'false',
  },
  {
    type: 'list', // 即类型为 选择项
    name: 'file_saver', // 名称，作为下面 generator 函数 options 的键
    message: '是否需要file-saver来保存文件（产品有下载功能时用）', // 提示语
    choices: [
      { name: '是', value: 'true' },
      { name: '否', value: 'false' }
    ],
    default: 'false',
  },
  {
    type: 'list', // 即类型为 选择项
    name: 'XLSX', // 名称，作为下面 generator 函数 options 的键
    message: '是否需要安装xlsx来解析excel?', // 提示语
    choices: [
      { name: '是', value: 'true' },
      { name: '否', value: 'false' }
    ],
    default: 'false',
  },
 {
  type: 'list', // 即类型为 选择项
  name: 'echarts', // 名称，作为下面 generator 函数 options 的键
  message: '是否安装 echarts', // 提示语
  choices: [
    { name: '是', value: 'true' },
    { name: '否', value: 'false' }
  ],
  default: 'false',
 }
]