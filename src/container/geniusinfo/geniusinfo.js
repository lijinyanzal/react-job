import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {NavBar, List, InputItem, TextareaItem, Button} from 'antd-mobile'

import {update} from '../../redux/user.redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

@connect(
  state => state.user,
  {update}
)
class GeniusInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'title': '',

    }
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={redirect}></Redirect> 
        : null}
        <NavBar mode="dark">牛人完善页面</NavBar>
        <AvatarSelector selectAvatar={imgname => this.setState({avatar: imgname})}></AvatarSelector>
        <List>
          <InputItem onChange={(v) => this.onChange('title', v)}>
            求职岗位
          </InputItem>
          <TextareaItem onChange={(v) => this.onChange('desc', v)}
          rows={3} autoHeight title='个人简介'>
          </TextareaItem>
        </List>
        
        <Button 
        onClick={()=> {
          this.props.update(this.state)
        }}
        type="primary">保存</Button>
      </div>
    )
  }
}

export default GeniusInfo
