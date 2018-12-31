import React, { Component } from 'react';
import WrapperCharts from './WrapperCharts';
import { COLOR_LISTS } from './LineCharts';
import './index.scss';
import {
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Area,
  Line,
} from "recharts";

interface ComposedChartsProps {
  data?: any;
  names?: any;
}

export default class ComposedCharts extends Component<ComposedChartsProps, any> {
  render() {
    const { data, names } = this.props;
    return (
      <WrapperCharts class_name="composed-charts">
        <ComposedChart data={data}>
          <defs>
            {
              names && names.slice(1).map((item, index) => (
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
          <CartesianGrid />
          {
            names && names.slice(1).map((item, index) => (
              <Area
                type="monotone"
                key={index}
                dataKey={item.dataKey}
                name={item.name}
                stroke={COLOR_LISTS[index]}
                fill={`url(#color-${index})`} />
            ))
          }
          {
            names && names.slice(1).map((item, index) => {
              return (
                <Bar key={index} dataKey={item.dataKey} name={item.name} fill={COLOR_LISTS[index]} />
              )
            })
          }
          {
            names && names.slice(1).map((item, index) => (
              <Line key={index} type="monotone" dataKey={item.dataKey} name={item.name} stroke={COLOR_LISTS[index]} />
            ))
          }
        </ComposedChart>
      </WrapperCharts>
    )
  }
}
