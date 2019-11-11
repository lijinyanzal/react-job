import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {loadData} from '../../redux/user.redux'

@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component {
  
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    
    // axios.get('/user/info')
    // .then(res=>{
    //   if (res.status==200) {
    //     if (res.data.code==0) {
    //       // 有登录信息de
    //       this.props.loadData(res.data.data)
    //     }else{
    //       this.props.history.push('/login')
    //     }
    //   }
    // })
    
    
    axios.defaults.baseURL = 'http://localhost:3000/'
    
    axios.get('user/info', {baseURL: '/'})
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            this.props.loadData(res.data.data)
          } else {
            this.props.history.push('/login')
          }
        }
      })
      .catch(err => console.log(err))

}

  
  render() {
    return null
  }
}

export default withRouter(AuthRoute)
