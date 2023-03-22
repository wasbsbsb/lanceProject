import React from "react";
import { Row, Col, Avatar, Switch, Radio } from 'antd'
import router from 'umi/router';
import { connect } from 'dva';
import sty from './home.less'


import LoadMoreList from './components/list'

class Home extends React.Component {

  state = {
    quetionList: [
      {
        quetion: 'FWFWFWFWFW1 废物费？',
        answer: 'A',
        answerA: "fwfw12",
        answerB: "fwfw13",
        answerC: "fwfw14",
      },
      {
        quetion: 'FWFWFWFWFW2  fwfw？',
        answer: 'b',
        answerA: "fwfw22",
        answerB: "fwfw23",
        answerC: "fwfw24",
      },
      {
        quetion: 'FWFWFWFWFW 3 fwfw？',
        answer: 'b',
        answerA: "fwfw22",
        answerB: "fwfw23",
        answerC: "fwfw24",
      },
      {
        quetion: 'FWFWFWFWFW4  fwfw？',
        answer: 'b',
        answerA: "fwfw22",
        answerB: "fwfw23",
        answerC: "fwfw24",
      }, {
        quetion: 'FWFWFWFWFW  5fwfw？',
        answer: 'b',
        answerA: "fwfw22",
        answerB: "fwfw23",
        answerC: "fwfw24",
      }
    ],
    radioValue: undefined,
    count: 0
  }

  onChange = (e) => {
    const { count } = this.state

    this.setState({ radioValue: e.target.value })

    setTimeout(() => {
      this.setState({ count: count + 1, radioValue: undefined })
    }, 2000)


    console.log(`switch to ${e.target.value}`);
  }


  render() {
    const { quetionList, count, radioValue } = this.state
    const { quetion, answerA, answerB, answerC } = quetionList[count]



    return <Row className={sty.home}>


      <Row className={sty.show}>
        <Col>
        </Col>
      </Row>
      <Row className={sty.quetionForm}>

        <Col className={sty.quetion}>
          {quetion}
        </Col>

        <Col>
          <Radio.Group value={radioValue} style={{ width: '100%' }} onChange={this.onChange}>
            <Row>
              <Col span={24}>
                <Radio value="A">{answerA}</Radio>
              </Col>
              <Col span={24}>
                <Radio value="B">{answerB}</Radio>
              </Col>
              <Col span={24}>
                <Radio value="C">{answerC}</Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Col>
      </Row>

      {/* <LoadMoreList /> */}

    </Row>
  }
}

export default connect(({ app }) => ({
  app,
}))(Home);