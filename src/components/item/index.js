import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
  Card,
  Col,
  Row,
  Icon
} from 'antd';

import './index.css';

class Item extends Component {

  renderCardHeader ( item  ) {
    return (
      <div>
        <Row>
          <Col span={14}>
            { this.renderStars( item.rating ) }
          </Col>
          <Col span={10}>
            <audio controls className="audio-control">
              <source src={ item.url } type="audio/mp3" />
            </audio>
          </Col>
        </Row>
      </div>
    );
  }

 renderStars ( rating ) {
    return _.map( [ 1, 2, 3, 4, 5 ], ( rate, index ) => (
      <span key={index}>
         <Icon type={`star${index <= rating ? '' : '-o'}`}/>
      </span>
    ) );
  }

  render() {
    const { item }    = this.props;
    const dateCreated = moment( item.created ).format( 'MM/DD/YYYY hh:mm A' );
    const minutes     = Math.floor( item.duration / 60 );
    return (
      <Row style={{ marginBottom : '20px' }}>
        <Col>
          <Card title={ this.renderCardHeader( item ) }>
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
    );
  }
}

export default Item;
