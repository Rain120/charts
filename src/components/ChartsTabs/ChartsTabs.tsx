import React, { Component } from 'react';
import Charts from 'src/components/Charts/Charts';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class ChartsTabs extends Component {
  newTabIndex: any = 0;

  public state = {
    activeKey: '',
    panes: [] as any,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let panes = [
      { title: 'Charts 1', content: <Charts />, key: '1' },
    ];
    this.setState({
      activeKey: panes[0].key,
      panes,
    })
  }

  public onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  public onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  public add = () => {
    let { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: <Charts />, key: activeKey });
    this.setState({ panes, activeKey });
  }

  public remove = (targetKey) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
      </Tabs>
    )
  }
}
