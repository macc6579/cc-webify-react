import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TableOutlined,
  ToolOutlined,
  StarOutlined,
  RobotOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import collapsedLogo from 'assets/logo-icon.png';
import logo from 'assets/logo-white.png';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = ({ location }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed, selectedKey) => {
    if (collapsed) {
      setOpenKeys([]);
    } else {
      setOpenKeys([selectedKey.split('-')[0]]);
    }
    setTimeout(() => {
      setCollapsed(collapsed);
    });
  };

  useEffect(() => {
    let pathname = location.pathname;
    if (!pathname) return;
    setSelectedKey(location.pathname);

    let openKey = location.pathname.split('-')[0];
    let index = location.pathname.lastIndexOf('/');
    let parentKey = location.pathname.substring(0, index);

    setOpenKeys([parentKey, openKey]);
  }, [location.pathname]);

  return (
    <>
      <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed} collapsedWidth="64">
        {/* logo */}
        <div className="sider-logo-container">
          {!collapsed && <img className="sider-logo" src={logo} alt="logo" />}
          {collapsed && <img className="sider-logo-collapsed" src={collapsedLogo} alt="logo" />}

          {collapsed ? (
            <MenuUnfoldOutlined className="menu-fold" onClick={() => onCollapse(!collapsed, selectedKey)} />
          ) : (
            <MenuFoldOutlined className="menu-fold" onClick={() => onCollapse(!collapsed, selectedKey)} />
          )}
        </div>

        {/* menu */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKey}
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          className="terraqt-menu">
          <SubMenu
            className="terraqt-submenu"
            key="/app/data"
            title={
              <span>
                <TableOutlined />
                <span>????????????</span>
              </span>
            }>
            <SubMenu key="/app/data/satellite" title={<span>????????????</span>}>
              <Menu.Item key="/app/data/satellite-download">
                <Link to="/app/data/satellite-download">????????????</Link>
              </Menu.Item>
              <Menu.Item key="/app/data/satellite-tasks">
                <Link to="/app/data/satellite-tasks">????????????</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="/app/data/tag" title={<span>?????????</span>}>
              <Menu.Item key="/app/data/tag-samples">
                <Link to="/app/data/tag-samples">????????????</Link>
              </Menu.Item>
              <Menu.Item key="/app/data/tag-regions">
                <Link to="/app/data/tag-regions">????????????</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="/app/data-wave">
              <Link to="/app/data-wave">????????????</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            className="terraqt-submenu"
            key="/app/standard"
            title={
              <span>
                <StarOutlined />
                <span>????????????</span>
              </span>
            }>
            <Menu.Item key="/app/standard-publish">
              <Link to="/app/standard-publish">????????????</Link>
            </Menu.Item>
            <Menu.Item key="/app/standard-categories">
              <Link to="/app/standard-categories">??????????????????</Link>
            </Menu.Item>
            <Menu.Item key="/app/standard-cors">
              <Link to="/app/standard-cors">COR??????</Link>
            </Menu.Item>
            <Menu.Item key="/app/standard-ders">
              <Link to="/app/standard-ders">DER??????</Link>
            </Menu.Item>
            <Menu.Item key="/app/standard-enas">
              <Link to="/app/standard-enas">??????????????????</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            className="terraqt-submenu"
            key="/app/algorithm"
            title={
              <span>
                <RobotOutlined />
                <span>????????????</span>
              </span>
            }>
            <Menu.Item key="/app/algorithm-space">
              <Link to="/app/algorithm-space">WorkSpace</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            className="terraqt-submenu"
            key="/app/tools"
            title={
              <span>
                <ToolOutlined />
                <span>????????????</span>
              </span>
            }>
            <Menu.Item key="/app/tools-upload">
              <Link to="/app/tools-upload">????????????</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default SideMenu;
