import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import HeaderNav from './HeaderNav';
import { useGlobalContext } from 'src/App/globalContext';
import { UserOutlined } from '@ant-design/icons';
import './style.sass';

const { Header } = Layout;

const THeader = ({ location }) => {
  let { account, headerNav } = useGlobalContext();
  const { profile } = account;

  const menu = (
    <Menu>
      <Menu.Item>{profile.username}</Menu.Item>
      <Menu.Item>
        <a href="http://sso.terraqt.ink">退出登录</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header id="header">
        <HeaderNav nav={headerNav} />
        <Dropdown overlay={menu}>
          <Avatar className="header-avatar" icon={<UserOutlined />} />
        </Dropdown>
      </Header>
    </>
  );
};

export default THeader;
