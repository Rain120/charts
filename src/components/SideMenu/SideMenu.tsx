import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import moment from 'moment';
import './index.scss';
import { menus } from './menus';
import { Layout, Menu, Icon } from 'antd';
import Timer from 'src/components/Timer/Timer';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface SideMenuProps {
  children?: any;
}

export default class SideMenu extends Component<SideMenuProps, any> {
  public state = {
    collapsed: false,
    selectedKeys: [menus[0].key],
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { collapsed, selectedKeys, } = this.state

    return (
      <Layout className="side-menu">
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className="logo">
            <img src={require('src/common/images/logo.png')} />
            <a href="https://github.com/Rain120/charts" target="_blank">
              <span className={classnames("title")}><Icon type="github" /></span>
            </a>
            <a href="https://www.zhihu.com/people/yan-yang-nian-hua-120/activities" target="_blank">
              <span className={classnames("title")}><Icon type="zhihu" /></span>
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKeys}>
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
                      <Link to={menu.path} style={{ overflow: 'hidden' }}><Icon type={menu.icon} />{menu.text}</Link>
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
          <Content style={{ margin: '1rem', padding: '1rem', background: '#fff', minHeight: '25rem', }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©{moment().format('YYYY')} Created by Rainy
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
