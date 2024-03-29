import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {TabBar} from 'antd-mobile'

@connect(
  state => state.chat
)
class NavLinkBar extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  
  render() {

    const navList = this.props.data.filter(v => !v.hide)
    const {pathname} = this.props.location
    
    return (
      <div style={{position: "fixed", width: "100%", bottom: 0}}>
        <TabBar>
          {navList.map(v => (
            <TabBar.Item 
              badge={v.path ==='/msg' ? this.props.unread : 0}
              key={v.path} 
              title={v.text} 
              icon={{uri: require(`./img/${v.icon}.png`)}}
              selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
              selected={pathname === v.path}
              onPress={() => {
                this.props.history.push(v.path)
              }}>
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
      
    )
  }
}


export default withRouter(NavLinkBar)
