import React from 'react';
import { Layout } from 'antd';
import 'garden/dist/lib/style.css';
import THeader from './Header';
import SideMenu from './SideMenu';
import TContent from './Content';
import './style.sass';

const { Content } = Layout;

const TLayout = ({ location }) => {
  return (
    <>
      <SideMenu location={location} />
      <Content>
        <THeader></THeader>
        <TContent />
      </Content>
    </>
  );
};

export default TLayout;
