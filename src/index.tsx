import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from 'src/routes/index';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

