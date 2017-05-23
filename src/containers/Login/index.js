import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Form,
  Icon,
  Card,
  Input,
  Button,
  Alert
} from 'antd';

const FormItem = Form.Item;

import { loginUser } from './actions';

import './index.css';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind( this );
    this.renderAlert  = this.renderAlert.bind( this );
  }

  componentWillMount () {
    if ( this.props.user ) {
      browserHistory.push( '/' );
    }
  }

  handleSubmit ( e ) {
    e.preventDefault();
    this.props.form.validateFields( ( err, values ) => {
      if ( !err ) {
        this.props.loginUser( values )
      }
    } );
  }

  renderAlert () {

    if ( this.props.loginError ) {
       return ( 
        <Alert message="Something went wrong"
          description={this.props.loginError}
          type="error"
          closable
        />
      );

    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <Card 
          className="login-card"
          title="Login">
          <Form onSubmit={this.handleSubmit}>
            <FormItem className="email">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email' }],
              })(
                <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email" placeholder="Email" />
              )}
            </FormItem>
            <FormItem className="password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
            { this.renderAlert() }
            <Button type="primary" htmlType="submit" className="login-form-button" disabled={this.props.loginSubmit}>
              Log in
            </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps ( state ) {
  return {
    user        : state.get( 'app' ).get( 'user' ),
    loginSubmit : state.get( 'login' ).get( 'loginSubmit' ),
    loginError  : state.get( 'login' ).get( 'loginError' )
  }
}

function mapDispatchToProps ( dispatch ) {
  return {
    loginUser : ( user ) => dispatch( loginUser( user ) )
  };
}

Login = Form.create()( Login );

export default connect( mapStateToProps, mapDispatchToProps )( Login );