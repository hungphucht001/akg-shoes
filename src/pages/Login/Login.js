import React, { useState, useEffect, } from 'react'

import { Button, Col, Form, Input, Row, notification } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './Login.scss'
import { Link, useNavigate, Navigate as Navigate2 } from 'react-router-dom';

import * as authApi from '~/services/authApi'
import Loading from '~/components/Loading';

import { useDispatch } from 'react-redux'
import { setAuth } from '~/redux/actions'

function Login(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

    const [validateStatusUsername, setvalidateStatusUsername] = useState({
        status: null,
        help: ''
    });

    const [validateStatusPassword, setvalidateStatusPassword] = useState({
        status: null,
        help: ''
    });

    const onFinish = async (values) => {
        setLoading(true)
        const res = await authApi.login(values)
        console.log(res.data.token)
        if (res.message === 'username not found') {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            setvalidateStatusUsername({
                status: "error",
                help: res.message
            })
            setvalidateStatusPassword({
                status: null,
                help: ''
            })

            return;
        }
        if (res.message === 'wrong password') {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            setvalidateStatusPassword({
                status: "error",
                help: res.message
            })
            setvalidateStatusUsername({
                status: null,
                help: ''
            })

            return;
        }

        dispatch(setAuth(res.data.token.accessToken))
        localStorage.setItem('accessToken', res.data.token.accessToken)
        localStorage.setItem('refreshToken', res.data.token.refreshToken)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setLoading(false)
        notification.success({
            message: 'Login success!',
        })
        navigate('/')
    };

    const onFinishFailed = (errorInfo) => {
        notification.error({
            message: 'Please input your username and password',
        })
    };
    const handleSignUp = () => {
        navigate('/sign-up')
    }

    const token = localStorage.getItem('accessToken')
    if (token) return <Navigate2 to="/" />
    else
        return (
            <Row className='wraper-login m-0' gutter={[12, 12]}>
                <Col className='wrap-form' md={7}>
                    <div className='login-header'>
                        <h2>Log In</h2>
                        <p>Login here using username and password</p>
                    </div>

                    <Form
                        name="basic"

                        wrapperCol={{
                            span: 17,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"

                            validateStatus={validateStatusUsername.status}
                            help={validateStatusUsername.help}

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            validateStatus={validateStatusPassword.status}
                            help={validateStatusPassword.help}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password

                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            className='mb-0'
                        >
                            <Button type="primary" className='login' htmlType="submit">
                                Log In
                            </Button>
                            <Row className='footer' gutter={[12, 12]}>
                                <Col md={12}>
                                    <Link to='/forgot-password' >
                                        Forgot Password
                                    </Link>
                                </Col>
                                <Col md={12}>
                                    <Button className='signup' onClick={handleSignUp} type="primary" htmlType="submit">
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>
                {loading && <Loading opacity={0.5} />}
            </Row >
        )
}

export default Login