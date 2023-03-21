import React from "react";

import { connect } from 'dva';
import sty from './FooterContent.less'

import { Row, Col, Avatar } from 'antd'
import router from 'umi/router';


class FooterContent extends React.Component {



    goto(data) {
        const { dispatch } = this.props

        dispatch({
            type: "app/updateState",
            payload: {
                headerTitle: data.name
            }
        })
        router.push(data.path)
    }



    render() {

        const { footerList } = this.props.app



        return <Row className={sty.footer}>
            {
                footerList.map(e =>
                    <Col
                        onClick={() => this.goto(e)}
                        key={e.path}
                        span={24 / footerList.length}
                    >
                        {e.name}
                    </Col>
                )
            }

        </Row>
    }
}

export default connect(({ app }) => ({
    app,
}))(FooterContent);