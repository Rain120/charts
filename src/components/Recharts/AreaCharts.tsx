import React, { Component } from 'react';
import WrapperCharts from './WrapperCharts';
import { COLOR_LISTS } from './LineCharts';
import './index.scss';
import {
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

interface AreaChartsProps {
  data?: any;
  names?: any;
}

export default class AreaCharts extends Component<AreaChartsProps, any> {
  render() {
    const { data, names } = this.props;
    return (
      <WrapperCharts class_name="area-charts">
        <AreaChart data={data}>
          <defs>
            {
              names && names.map((item, index) => (
                <linearGradient key={index} id={`color-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLOR_LISTS[index]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={COLOR_LISTS[index]} stopOpacity={0} />
                </linearGradient>
              ))
            }
          </defs>
          {
            names && <XAxis dataKey={names[0].dataKey} name={names[0].name} />
          }
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {
            names && names.slice(1).map((item, index) => (
              <Area
                type="monotone"
                dataKey={item.dataKey}
                key={index}
                name={item.name}
                stroke={COLOR_LISTS[index]}
                fill={`url(#color-${index})`} />
            ))
          }
        </AreaChart>
      </WrapperCharts>
    )
  }
}
