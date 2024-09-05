'use client';
import React from 'react';
import { Row, Col, Form, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import * as S from './styled';

const Login = () => {
  const router = useRouter();

  const onFinish = (values: unknown) => {
    console.log('Success:', values);
    message.success('Login successful!');
    router.push('/home');
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
    message.error('Login failed. Please try again.');
  };

  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col span={12} style={{ background: '#141414', padding: '50px' }}>
        <S.LoginFormWrapper>
          <S.QuoteTitle level={2} style={{ color: '#fff' }}>
            Hello, <S.HighlightText>Digital Fortress</S.HighlightText>
          </S.QuoteTitle>
          <S.LoginSubtitle>
            Log in to platform to start creating magic.
          </S.LoginSubtitle>
          <Form
            layout="vertical"
            onFinish={onFinish}           
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <S.LoginInput
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <S.PasswordInput 
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                type="password"
              />
            </Form.Item>
            <S.LoginFooter>
              <S.LoginCheckbox>Remember me</S.LoginCheckbox>
              <S.ForgotPasswordLink>Forgot Password?</S.ForgotPasswordLink>
            </S.LoginFooter>
            <Form.Item>
              <S.LoginButton type="primary" htmlType="submit" block size="large">
                Log in
              </S.LoginButton>
            </Form.Item>
            <S.SignupText>
              Don’t have an account? <S.SignupLink>Sign Up</S.SignupLink>
            </S.SignupText>
          </Form>
        </S.LoginFormWrapper>
      </Col>

      <S.LoginImageContainer span={12}>
        {/* <S.LoginQuote>
          <S.QuoteTitle level={3}>
            Digital Fortress has been a game-changer for our content creation process.
          </S.QuoteTitle>
          <S.QuoteText>
            The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
          </S.QuoteText>
          <S.QuoteText>- Lily Alisson, CMO at Digital Fortress</S.QuoteText>
        </S.LoginQuote> */}
      </S.LoginImageContainer>
    </Row>
  );
};

export default Login;
