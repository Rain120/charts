import React, { Component } from 'react';
import { COLOR_LISTS } from './LineCharts';
import './index.scss';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

interface PieChartsProps {
  data?: any;
  names?: any;
  radius?: any;
  pieWidth?: any;
  pieHeight?: any;
}

export default class PieCharts extends Component<PieChartsProps, any> {
  render() {
    const { data, names, radius, pieWidth, pieHeight } = this.props;
    return (
      <div className="pie-charts">
        {
          names ? names.slice(1).map((item, index) => (
            <PieChart key={index} width={pieWidth} height={pieHeight}>
              <Tooltip />
              <Pie
                data={data}
                dataKey={item.dataKey}
                nameKey={item.name}
                cx="50%"
                cy="50%"
                radius={radius}
                fill={COLOR_LISTS[index]}
                label={true} >
                {
                  data.map((entry, i) => <Cell key={i} fill={COLOR_LISTS[i % COLOR_LISTS.length]} />)
                }
              </Pie>
            </PieChart>
          )) : null
        }
      </div>
    )
  }
}
