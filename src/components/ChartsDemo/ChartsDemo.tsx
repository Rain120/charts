import React, { Component } from 'react'
import { randomData } from 'src/api/mockdata';
import './index.scss';
import LineCharts from 'src/components/Recharts/LineCharts';
import BarCharts from 'src/components/Recharts/BarCharts';
import AreaCharts from 'src/components/Recharts/AreaCharts';
import PieCharts from 'src/components/Recharts/PieCharts';
import ComposedCharts from 'src/components/Recharts/ComposedCharts';

export default class ChartsDemo extends Component {

  public state = {
    lineData: [] as any,
    barData: [] as any,
    areaData: [] as any,
    names: [{
      name: '',
      dataKey: '',
    }] as any,
  }

  componentWillMount() {
    this.lineDataFormat();
    this.barDataFormat();
    this.areaDataFormat();
  }

  public lineDataFormat = () => {
    let lineData = [] as any;
    let names = [
      {
        name: 'uv',
        dataKey: 'v1'
      },
      {
        name: 'pv',
        dataKey: 'v2'
      }
    ] as any;
    for (let i = 0; i < 10; i++) {
      lineData.push({
        id: `${i}`,
        v0: randomData(10, [1972, 2019])[i],
        v1: randomData(10, [1972, 2019])[i],
        v2: randomData(10, [1972, 2019])[i],
      })
    }
    this.setState({
      lineData,
      names,
    })
  }

  public barDataFormat = () => {
    let barData = [] as any;
    let names = [
      {
        name: 'value',
        dataKey: 'v0'
      },
      {
        name: 'uv',
        dataKey: 'v1'
      },
      {
        name: 'pv',
        dataKey: 'v2'
      }
    ] as any;
    for (let i = 0; i < 10; i++) {
      barData.push({
        id: `${i}`,
        v0: i,
        v1: randomData(10, [1972, 2019])[i],
        v2: randomData(10, [1972, 2019])[i],
      })
    }
    this.setState({
      barData,
      names,
    })
  }

  public areaDataFormat = () => {
    let areaData = [] as any;
    let names = [
      {
        name: 'value',
        dataKey: 'v0'
      },
      {
        name: 'uv',
        dataKey: 'v1'
      },
      {
        name: 'pv',
        dataKey: 'v2'
      }
    ] as any;
    for (let i = 0; i < 10; i++) {
      areaData.push({
        id: `${i}`,
        v0: i,
        v1: randomData(10, [1972, 2019])[i],
        v2: randomData(10, [1972, 2019])[i],
      })
    }
    this.setState({
      areaData,
      names,
    })
  }

  render() {
    const { lineData, barData, areaData, names } = this.state;
    return (
      <div className="charts-demo">
        <div className="recharts-demo">
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>Recharts Demo</p>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Line Chart</p>
          <LineCharts data={lineData} names={names} />
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Bar Chart</p>
          <BarCharts data={barData} names={names} />
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Area Chart</p>
          <AreaCharts data={areaData} names={names} />
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Pie Chart</p>
          <PieCharts
            data={areaData}
            names={names}
            radius={100}
            pieWidth={700}
            pieHeight={500} />
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Composed Chart</p>
          <ComposedCharts data={lineData} names={names} />
        </div>
      </div>
    )
  }
}
