import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
// import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { GlobalContextProvider } from './globalContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Layout from './Layout';
// import '@terraqt/garden/dist/lib/style.css';

const App = () => {
  moment.locale('zh-cn');
  return (
    <AntdConfigProvider locale={zhCN}>
      <GlobalContextProvider>
        <Router>
          <Switch>
            <Route path="/app" component={Layout} />
            <Redirect to="/app" />
          </Switch>
        </Router>
      </GlobalContextProvider>
    </AntdConfigProvider>
  );
};

export default App;
