import React, { Component } from 'react';
import _ from 'lodash';
import {
  Menu,
  Icon
} from 'antd';

const SubMenu       = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  render() {
    return (
      <Menu
        mode="horizontal">
        <SubMenu title={<span><Icon type="setting" />Options</span>}>
          <MenuItemGroup title="Logout" />
        </SubMenu>
      </Menu>
    );
  }
}

export default Header;
