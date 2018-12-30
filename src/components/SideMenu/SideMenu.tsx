import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './index.scss';
import { menus } from './menus';
import { Layout, Menu, Icon } from 'antd';
import Timer from 'src/components/Timer/Timer';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface SideMenuProps {
  children?: any;
}

export default class SideMenu extends Component<SideMenuProps, any> {
  public state = {
    collapsed: false
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { collapsed } = this.state

    return (
      <Layout className="side-menu">
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className="logo">
            <Link to="/">
              <span className={classnames("title")}>Rainy</span>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[menus[0].key]}>
            {
              menus && menus.map(menu => (
                menu.children
                  ? (
                    <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /><span>{menu.text}</span></span>}>
                      {
                        menu.children.map(item => (
                          <Menu.Item key={item.key}>
                            <Link to={item.path}>{item.text}</Link>
                          </Menu.Item>
                        ))
                      }
                    </SubMenu>
                  ) : (
                    <Menu.Item key={menu.key}>
                      <Link to={menu.path}><Icon type={menu.icon} />{menu.text}</Link>
                    </Menu.Item>
                  )
              ))
            }
          </Menu>
        </Sider>
        <Layout className="r-content">
          <Header>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Timer timerStyle="timer" />
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
