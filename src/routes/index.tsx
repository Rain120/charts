import React from 'react'
import App from 'src/App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ChartsDemo from 'src/components/ChartsDemo/ChartsDemo';
import ChartsTabs from 'src/components/ChartsTabs/ChartsTabs';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact={true} path="/" component={ChartsDemo} />
            <Route path="/charts/charts-drawer" component={ChartsTabs} />
          </Switch>
        </App>
      </Router>
    )
  }
}
