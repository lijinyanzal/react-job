import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

import Logo from '../../component/logo/logo'
import {login} from '../../redux/user.redux'
import formWrapper from '../../component/form-wrapper/form-wrapper'

@connect(
  state => state.user,
  {login}
)
@formWrapper
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this) 
    this.handleLogin = this.handleLogin.bind(this)
  }
  
  handleRegister() {
    this.props.history.push('/register')
  }
  
  handleLogin(user, pwd) {
    this.props.login(this.props.state)
  }
  
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
          {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <WhiteSpace />
            <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
            <WhiteSpace />
            <InputItem onChange={v => this.props.handleChange('pwd', v)} type="password">密码</InputItem>
            <WhiteSpace />
          </List>
          <Button onClick={this.handleLogin} type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.handleRegister} type="primary" >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
