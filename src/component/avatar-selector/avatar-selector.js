import React from 'react'
import {Grid, List} from 'antd-mobile'
import Proptypes from 'prop-types'

class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: Proptypes.func.isRequired
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
    .split(',')
    .map(name => ({
      icon: require(`../img/${name}.png`),
      text: name
    }))
    
    const gridHeader = this.state.icon ?
                        (<div>
                          <span>已选择图像</span>
                          <img style={{width:20}} src={this.state.icon} alt={this.state.text}/>
                          </div>)
                        : '请选择图像'
    
    return (
      <div>
        <List renderHeader={() => gridHeader}>

          <Grid onClick={elem => {
            this.setState(elem)
            this.props.selectAvatar(elem.text)
          }}
          data={avatarList} 
          columnNum={5}/>
        </List>
      </div>
    )
  }
}

export default AvatarSelector
