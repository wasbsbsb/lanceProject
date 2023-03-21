import React from "react";
import { Row, Col, Avatar, Switch, Spin } from 'antd'
import router from 'umi/router';
import { connect } from 'dva';
import sty from './home.less'


import LoadMoreList from './components/list'

class Home extends React.Component {

  onChange(checked) {
    console.log(`switch to ${checked}`);
  }


  render() {




    return <Row className={sty.home}>

      <Avatar shape="square" size={64} icon="user" />

      <Spin tip="Loading..." />
    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Home);