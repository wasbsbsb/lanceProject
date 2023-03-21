import React from 'react'
import { Form, Row, Col, Icon, Input, Button, PageHeader } from 'antd';

import Styles from './index.less'
import service from './../service/index.js';
import router from 'umi/router';
import { connect } from 'dva';

const { get, post, map } = service

const { accountLogin } = map







function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {




    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { username, password } = values

                post(accountLogin, { username, password }, (res) => {
                    if (res.data.data) {
                        window.localStorage.setItem('lckey', res.data.token)


                        router.push('home')
                    }

                })


            }
        });

    }


    render() {




        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { dispatch } = this.props
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return <Row>

            <Row className={Styles.form}>




                <Form onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Col span={6}>
                            <Button onClick={() => {
                                router.push('RegisterAnAccount')
                                dispatch({
                                    type: "app/updateState",
                                    payload: {
                                        headerTitle: '注册'
                                    }
                                })
                            }}>
                                注册
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                登录
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
}))(Form.create()(Login));
