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
  BarChart,
} from "recharts";

interface BarChartsProps {
  data?: any;
  names?: any;
}

export default class BarCharts extends Component<BarChartsProps, any> {
  render() {
    const { data, names } = this.props;
    return (
      <WrapperCharts class_name="bar-charts">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {
            names && <XAxis dataKey={names[0].dataKey} name={names[0].name} />
          }
          <YAxis />
          <Tooltip />
          <Legend />
          {
            names && names.slice(1).map((item, index) => (
              <Bar dataKey={item.dataKey} key={index} name={item.name} fill={COLOR_LISTS[index]} />
            ))
          }
        </BarChart>
      </WrapperCharts>
    )
  }
}
