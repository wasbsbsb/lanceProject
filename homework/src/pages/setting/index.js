import React from "react";

import { Row, Col, Avatar, Switch, Spin, Upload, message, Button, Icon } from 'antd'

import router from 'umi/router';
import { connect } from 'dva';
import sty from './home.less'

// import LoadMoreList from './components/list'

import * as xlsx from 'xlsx'


//  读取Excel文件 
function readFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsBinaryString(file)
    reader.onload = ev => {
      resolve(ev.target.result)
    }
  })
}

class Home extends React.Component {

  onChange = async (info) => {
    if (info.file.status !== 'uploading') {
      const data = await readFile(info.file.originFileObj)
      const work = xlsx.read(data, { type: 'binary' })
      console.log(work) // Excel 内容
    }
  }

  render() {
    return <Row>
      <Upload
        name={'file'}
        action={''}
        onChange={this.onChange}
      >
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Home);