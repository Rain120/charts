import React, { Component } from 'react';
import WrapperCharts from './WrapperCharts';
import './index.scss';
import {
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Label,
} from "recharts";

export const COLOR_LISTS = ['#8884d8', '#cf6868', '#3fb549', '#a6d41f', '#8ad4d8', '#cfdd68', '#354449', '#a75d1f'];

interface LineChartsProps {
  data?: any;
  names?: any;
}

export default class LineCharts extends Component<LineChartsProps, any> {
  render() {
    const { data, names } = this.props;
    return (
      <WrapperCharts class_name="line-charts">
        <LineChart data={data}>
          <CartesianGrid />
          {
            names && <XAxis dataKey={names[0].dataKey} name={names[0].name} />
          }
          <YAxis />
          <Tooltip />
          <Legend />
          {
            names && names.slice(1).map((item, index) => (
              <Line type="monotone" dataKey={item.dataKey} key={index} name={item.name} stroke={COLOR_LISTS[index]} />
            ))
          }
          <Label />
        </LineChart>
      </WrapperCharts>
    )
  }
}
