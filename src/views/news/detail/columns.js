// 新闻列表记录
export default [
    {
      title: '新闻编号',
      dataIndex: 'newsNo',
      scopedSlots: { customRender: 'newsNo' }
    },
    {
      title: '新闻标题',
      dataIndex: 'newsTitle',
      scopedSlots: { customRender: 'newsTitle' }
    },
    {
      title: '新闻图片',
      dataIndex: 'newsImg',
      scopedSlots: { customRender: 'newsImg' }
    },
    {
      title: '新闻来源',
      dataIndex: 'newsFrom',
      scopedSlots: { customRender: 'newsFrom' }
    },
    {
      title: '新闻时间',
      dataIndex: 'newsTime',
      scopedSlots: { customRender: 'newsTime' }
    },
    {
      title: '新闻内容',
      dataIndex: 'newsContent',
      scopedSlots: { customRender: 'newsContent' }
    },
    {
      title: '操作',
      dataIndex: 'actions',
      scopedSlots: { customRender: 'actions' }
    }
  ]
  