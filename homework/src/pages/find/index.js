import React from "react";
import { Row, Col, Avatar, Switch } from 'antd'
import router from 'umi/router';
import { connect } from 'dva';
import sty from './home.less'


import List from './components/list'

class Page extends React.Component {




  render() {
    return <Row className={sty.home}>


      <List />

    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Page);