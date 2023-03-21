import React from 'react'
import { Form, Row, Col, Icon, Input, Button, PageHeader } from 'antd';

import Styles from './index.less'
import service from './../service/index.js';
import router from 'umi/router';
import { connect } from 'dva';

const { get, post, map } = service

const { signup } = map







function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterAnAccount extends React.Component {




    handleSubmit = (e) => {
        e.preventDefault();
        const { validateFields, setFields ,getFieldsError } = this.props.form
        validateFields((err, values) => {
            const { username, password, passwordTwo } = values
            if (passwordTwo !== password) {
                this.props.form.setFields({
                    passwordTwo: {
                        value: passwordTwo,
                        errors: ['请输入相同密码']
                    }
                })
                return
            }

            if (!err) {

                post(signup, { username, password }, (err) => {
                    console.log(err, 'sssss')
                })


            }
        });

    }


    render() {




        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { dispatch } = this.props

        return <Row>

            <Row className={Styles.form}>




                <Form onSubmit={this.handleSubmit}>
                    <Form.Item >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入登录名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="登录名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入登录密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="登录密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item  help={<>{getFieldError('passwordTwo')}</>} >
                        {getFieldDecorator('passwordTwo', {
                            rules: [{ required: true, message: '请再次核对密码' }],
                            
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="再次确认"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Col span={6}>
                            <Button onClick={() => {
                                router.push('login')
                                dispatch({
                                    type: "app/updateState",
                                    payload: {
                                        headerTitle: '登录'
                                    }
                                })
                            }}>
                                登录
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                注册
                            </Button>
                        </Col>
                    </Form.Item>
                </Form>
            </Row>




        </Row>

    }

}

export default connect(({ app }) => ({
    app,
}))(Form.create()(RegisterAnAccount));