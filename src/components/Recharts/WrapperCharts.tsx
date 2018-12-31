import React, { Component } from 'react'
import './index.scss';
import { ResponsiveContainer } from "recharts";

interface WrapperChartsProps {
  class_name: any;
}

export default class WrapperCharts extends Component<WrapperChartsProps, any> {
  render() {
    const { class_name } = this.props;
    return (
      <div className={class_name}>
        <ResponsiveContainer>{this.props.children}</ResponsiveContainer>
      </div>
    )
  }
}
