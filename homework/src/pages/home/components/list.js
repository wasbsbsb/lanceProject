import { Form, Icon, Input, Button, PageHeader, Row, Col } from 'antd';
import React from "react";
import axios from 'axios';
import service from '../../service';

const { TextArea } = Input;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoadMoreList extends React.Component {
    state = {
        loading: false,
    };

    componentDidMount() {

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, { message }) => {
            if (!err) {


                
                service.instance.get('haha')
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })


                


                console.log('Received values of form: ', service.instance);
            }
        });
    };


    onLoadMore = () => {


    };

    render() {
        const { initLoading, loading, list } = this.state;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    // onBack={() => null}
                    title="留言"
                />
                <Row style={{ height: 10 }}>

                </Row>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('message', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <TextArea rows={4} />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </>

        );
    }
}


export default Form.create()(LoadMoreList)