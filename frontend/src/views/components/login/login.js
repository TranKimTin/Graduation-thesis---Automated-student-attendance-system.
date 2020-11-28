import React, { Component } from "react";
import { toastr } from "react-redux-toastr";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from '../../../util/axios';
import { BACKEND_URL } from '../../../config';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.changeValue = this.changeValue.bind(this);
        this.login = this.login.bind(this);
    }

    changeValue(e, { name, value }) {
        this.setState({
            [name]: value
        });
    }

    login() {
        let { username = '', password = '' } = this.state;
        if (username.trim() === '') return toastr.error('Chưa nhập tài khoản');
        if (password.trim() === '') return toastr.error('Chưa nhập mật khẩu');
        axios.post(`${BACKEND_URL}/api/login`, { username, password })
            .then(result => {
                console.log(result)
                if (result.status === 'success') {
                    let access_token = result.data.access_token;
                    Cookies.set("access_token", access_token);
                    let user = jwt.decode(access_token);
                    Cookies.set('user', JSON.stringify(user));
                    window.location.href = '/';
                }
                else if (result.status === 'error') {
                    return Promise.reject(result);
                }
            })
            .catch(err => toastr.error(err.message))
    }

    render() {
        let { username, password } = this.state;
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo-login.png' />Đăng nhập hệ thống
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='Tên tài khoản'
                                value={username}
                                name='username'
                                onChange={this.changeValue}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Mật khẩu'
                                value={password}
                                type='password'
                                name='password'
                                onChange={this.changeValue}
                            />

                            <Button
                                color='teal'
                                fluid size='large'
                                content='Đăng nhập'
                                onClick={this.login}
                            />
                        </Segment>
                    </Form>
                    <Message>
                        <a href='/login'>Quên mật khẩu? </a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}


export default LoginForm;