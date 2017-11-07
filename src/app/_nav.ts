export const navigation = [
  {
    name: '控制台',
    url: '/dashboard',
    icon: 'anticon anticon-appstore-o',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: '设备管理',
    url: '/machine',
    icon: 'anticon anticon-hdd',
    children: [
      {
        name: '设备查询',
        url: '/machine/detail',
        icon: 'anticon anticon-search'
      },
      {
        name: '设备列表',
        url: '/machine/list',
        icon: 'anticon anticon-file-text'
      },
      {
        name: '批次管理',
        url: '/machine/batch',
        icon: 'anticon anticon-switcher'
      }
    ]
  },
  {
    name: '订单管理',
    url: '/order',
    icon: 'anticon anticon-file',
    children: [
      {
        name: '账单查询',
        url: '/order/search',
        icon: 'anticon anticon-search'
      },
      {
        name: '账单列表',
        url: '/order/list',
        icon: 'anticon anticon-file-text'
      }
    ]
  },
  {
    name: '资金管理',
    url: '/fund',
    icon: 'anticon anticon-pay-circle-o',
    children: [
      {
        name: '资金管理',
        url: '/order/search',
        icon: 'anticon anticon-search'
      }
    ]
  },
  {
    name: '统计分析',
    url: '/analysis',
    icon: 'anticon anticon-area-chart'
  }
];
