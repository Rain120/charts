import * as React from 'react';
import SideMenu from 'src/components/SideMenu/SideMenu';
import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SideMenu {...this.props} />
      </div>
    );
  }
}

export default App;
