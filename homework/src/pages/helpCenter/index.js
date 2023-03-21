import React from "react";
import { Row, Col, Avatar, Switch, Spin } from 'antd'
import router from 'umi/router';
import { connect } from 'dva';
import sty from './home.less'


import LoadMoreList from './components/list'

class Home extends React.Component {




  render() {




    return <Row className={sty.home}>

      <Spin tip="Loading..." />

    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Home);