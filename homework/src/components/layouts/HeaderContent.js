import React from "react";

import { connect } from 'dva';
import sty from './HeaderContent.less'

import { Row, Col, Avatar } from 'antd'
import router from 'umi/router';


class HeaderContent extends React.Component {

    toLogo() {
        router.push('/')
    }

    render() {

        const { headerTitle } = this.props.app


        return <Row className={sty.title}>
            <Col onClick={() => this.toLogo()} span={6} className={sty.logo}>lance l c</Col>
            <Col span={12}>{headerTitle}</Col>
            <Col onClick={() => router.push('/login')} span={6}>
                <Avatar size="large" icon="user" />
            </Col>
        </Row>
    }
}

export default connect(({ app }) => ({
    app,
}))(HeaderContent);