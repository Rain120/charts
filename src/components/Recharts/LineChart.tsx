import React, { Component } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Brush,
  Label,
  ResponsiveContainer
} from "recharts";

interface LineChartsProps {
  data?: any;
}

export default class LineCharts extends Component<LineChartsProps, any> {
  render() {
    return (
      <div className="line-chart">
        <ResponsiveContainer width={400} height="80%">
          <LineChart width={`100%`} height={40} data={this.props.data}>
            <Brush dataKey="name">
              <LineChart>
                <CartesianGrid stroke="#f5f5f5" fill="#e6e6e6" />
                <XAxis />
                <YAxis domain={["auto", "auto"]} />
                <Line type="monotone" dataKey="uv" name="uv" stroke="#7eb26d" />
                <Label />
              </LineChart>
            </Brush>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
