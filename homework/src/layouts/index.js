
import React from 'react';
import CreateLayout from './../layouts/create/index'
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import enquireJs from 'enquire.js';

class BasicLayout extends React.Component {


  componentDidMount() {
    enquireJs.register('screen and (max-width: 576px)', {
      match: (state) => {
        this.props.dispatch({
          type: "app/updateState",
          payload: {
            isMobile: true
          }
        })
      },
      unmatch: () => {
        this.props.dispatch({
          type: "app/updateState",
          payload: {
            isMobile: false
          }
        })
      }
    })
  }

  render() {
    const { children, isMobile } = this.props
    console.log(isMobile, this.props)
    return <CreateLayout children={children}></CreateLayout>
  }

}
export default withRouter(connect(
  (state) => {
    const app = state.app
    return app
  }
)(BasicLayout));
