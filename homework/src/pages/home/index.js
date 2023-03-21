import React from "react";
import { Row, Col, Avatar, Switch } from 'antd'
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

      <LoadMoreList />

    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Home);