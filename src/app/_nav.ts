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
        name: 'Search',
        url: '/machine/search',
        icon: 'anticon anticon-search'
      },
      {
        name: 'List',
        url: '/machine/list',
        icon: 'anticon anticon-file-text'
      }
    ]
  },
  {
    name: 'Order',
    url: '/order',
    icon: 'anticon anticon-pay-circle-o',
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
];
