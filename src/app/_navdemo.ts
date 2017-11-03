export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'anticon anticon-appstore-o',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Machine',
    url: '/machine',
    icon: 'anticon anticon-hdd',
    children: [
      {
        name: 'List',
        url: '/machine/list',
        icon: 'anticon anticon-file-text'
      },
      {
        name: 'Detail',
        url: '/machine/detail',
        icon: 'anticon anticon-search'
      }
    ]
  },
  {
    name: 'Order',
    url: '/order',
    icon: 'anticon anticon-file',
    children: [
      {
        name: 'Search',
        url: '/order/search',
        icon: 'anticon anticon-search'
      },
      {
        name: 'List',
        url: '/order/list',
        icon: 'anticon anticon-file-text'
      }
    ]
  },
  {
    name: 'Fund',
    url: '/fund',
    icon: 'anticon anticon-pay-circle-o',
    children: [
      {
        name: 'Search',
        url: '/order/search',
        icon: 'anticon anticon-search'
      }
    ]
  },
  {
    name: 'Analysis',
    url: '/analysis',
    icon: 'anticon anticon-area-chart'
  }
];
