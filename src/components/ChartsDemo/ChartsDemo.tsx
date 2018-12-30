import React, { Component } from 'react'
import { randomData } from 'src/api/mockdata';

const dataArr = randomData(50, [20, 100]);

export default class ChartsDemo extends Component {

  public state = {
    lineData: [],
  }

  componentWillMount() {
    let lineData = [] as any;
    dataArr.map((item, index) => {
      lineData.push({
        id: `${item}-${index}`,
      })
    })
  }


  render() {
    return (
      <div className="charts-demo">
        123
      </div>
    )
  }
}
