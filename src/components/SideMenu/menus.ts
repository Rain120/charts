/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2018-12-30 15:43:12
 * @LastEditTime: 2018-12-31 13:28:04
 */

export const menus = [
  {
    key: 'menu-0',
    icon: 'bar-chart',
    text: 'Charts Demo Show',
    path: '/',
  },
  {
    key: 'menu-1',
    icon: 'dashboard',
    text: 'ReCharts',
    children: [
      {
        key: '1',
        text: 'Charts Drawer',
        path: '/charts/charts-drawer'
      },
    ]
  }
] as any;
