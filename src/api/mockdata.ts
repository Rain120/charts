/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2018-12-30 17:03:27
 * @LastEditTime: 2018-12-30 18:36:01
 */

export const randomData = (num: any, [left_range, right_range]: any) => {
  let data = [] as any;
  for (let i = 0; i < num; i++) {
    data.push(Math.floor(Math.random() * (right_range - left_range + 1)))
  }
  return data;
};
