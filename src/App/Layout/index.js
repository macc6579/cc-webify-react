import React from 'react';
import { Layout } from 'antd';
import AntHeader from './Header';
import SideMenu from './SideMenu';
import AntContent from './Content';
import './style.sass';

const { Content } = Layout;

const AntLayout = ({ location }) => {
  return (
    <>
      <SideMenu location={location} />
      <Content>
        <AntHeader/>
        <AntContent />
      </Content>
    </>
  );
};

export default AntLayout;