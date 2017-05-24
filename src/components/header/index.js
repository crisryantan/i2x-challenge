import React, { Component } from 'react';
import _ from 'lodash';
import {
  Menu,
  Icon
} from 'antd';

const SubMenu       = Menu.SubMenu;

class Header extends Component {

  handleClick () {
    console.log('hi')
  }

  render() {
    return (
      <Menu
        onClick={this.props.unAuthUser}
        mode="horizontal">
        <SubMenu title={<span><Icon type="setting" />Options</span>}>
             <Menu.Item key="setting:1">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Header;
