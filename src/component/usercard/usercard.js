import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'

class UserCard extends React.Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  }
  
  handleClick(v) {
    this.props.history.push(`/chat/${v._id}`)
  }
  
  render() {
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v => (
          v.avatar 
        ? (<Card 
            key={v._id}
            onClick={() => this.handleClick(v)}>
            <Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}>
            </Header>
            <Body>
              <div>
                {v.type === 'boss' ? <div>公司: {v.company}</div> : null}
                {v.desc ?
                v.desc.split('\n').map(desc => (
                <div key={desc}>{desc}</div>
                ))
                : null}
                {v.type === 'boss' ? <div>薪资: {v.money}</div> : null}
              </div>
            </Body>
          </Card>)
          : null
        ))}
      </WingBlank>
    )
  }
}

export default withRouter(UserCard)
