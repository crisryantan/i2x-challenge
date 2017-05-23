import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from './actions';
import {
  Card,
  Col,
  Row,
  Spin,
  Menu,
  Icon
} from 'antd';

import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ListView extends Component {
  componentWillMount () {
    this.props.getList();
  }

  displayLists () {
    const { fetching, lists } = this.props
    console.log( lists )
    if ( fetching ) {
      return (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )
    }

    if ( lists.length ) {
      return (
        <div>
          <Menu
            mode="horizontal">
            <SubMenu title={<span><Icon type="setting" />Options</span>}>
              <MenuItemGroup title="Logout" />
            </SubMenu>
          </Menu>
          <div style={{ padding: '50px' }}>
            { _.map( lists, this.renderItem ) }
          </div>
        </div>
      )
    }

  }

  renderItem ( item ) {
    const dateCreated = moment( item.created ).format( 'MM/DD/YYYY hh:mm A' );
    const minutes     = Math.floor( item.duration / 60 );
    return (
      <Row key={item.url} style={{ marginBottom : '20px' }}>
        <Col>
          <Card title={ item.rating }>
            <p>
              { item.url }
            </p>
            <p>
              { minutes } minutes
            </p>
            <p>
              { dateCreated } date
            </p>
            <p>
              {item.final_script}
            </p>
          </Card>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className="list-view">
        { this.displayLists() }
      </div>
    );
  }
}

function mapStateToProps ( state ) {
  return {
    lists    : state.get( 'list' ).get( 'lists' ),
    fetching : state.get( 'list' ).get( 'fetching' ),
    error    : state.get( 'list' ).get( 'error' )
  };
}

function mapDispatchToProps ( dispatch ) {
  return {
    getList : () => dispatch( getList() )
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( ListView );
