import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Spin
} from 'antd';

import Header from '../../components/header';
import Item from '../../components/item';
import { unAuthUser } from '../App/actions';
import { getList } from './actions';
import './index.css';

class ListView extends Component {
  componentWillMount () {
    this.props.getList();
  }

  displayLists () {
    const { fetching, lists, unAuthUser } = this.props

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
          <Header unAuthUser={unAuthUser} />
          <div style={{ padding: '50px' }}>
            { _.map( lists, this.renderItem ) }
          </div>
        </div>
      )
    }

  }

  renderItem ( item ) {
    return (
      <Item key={item.url} item={item} />
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
    getList    : () => dispatch( getList() ),
    unAuthUser : () => dispatch( unAuthUser() )
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( ListView );
