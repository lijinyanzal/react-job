import React from 'react'
import {connect} from 'react-redux'
import browserCookie from 'browser-cookies'
import {Redirect} from 'react-router-dom'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'

import {logoutSubmit} from '../../redux/user.redux' 

@connect(
  state => state.user,
  {logoutSubmit}
)
class User extends React.Component {

  logout = () => {
    const alert = Modal.alert
    
    alert('注销', '确认退出登录吗?', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => {
        browserCookie.erase('userid')
        this.props.logoutSubmit()
      }},
    ])
  }
  
  render() {
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief

    return props.user ? (
      <div>
        <Result 
          img={<img src={require(`../img/${props.avatar}.png`)}style={{width:50}} alt=""/>}
          title={props.user}
          message={props.type==='boss' ? props.company : null }
        />
        <List renderHeader={() => '简介'}>
          <Item wrap>
            {props.title}
            {props.desc ? 
            props.desc.split('\n').map(v =>(
              <Brief key={v}>{v}</Brief>
            ))
            : null}
            {props.money ? <Brief>薪资: {props.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item type="primary" onClick={this.logout} >
            退出登录
          </Item>
        </List>
        
      </div>

    ) : <Redirect to={props.redirectTo} />
  }
}

export default User
