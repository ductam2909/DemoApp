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
    message.success('Đăng nhập thành công!');
    router.push('/home');
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
    message.error('Đăng nhập thất bại. Vui lòng thử lại.');
  };

  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col span={12} style={{ background: '#141414', padding: '50px' }}>
        <S.LoginFormWrapper>
          <S.QuoteTitle level={2} style={{ color: '#fff' }}>
            Xin chào, <S.HighlightText>Digital Fortress</S.HighlightText>
          </S.QuoteTitle>
          <S.LoginSubtitle>
            Đăng nhập vào nền tảng để bắt đầu tạo điều kỳ diệu.
          </S.LoginSubtitle>
          <Form
            layout="vertical"
            onFinish={onFinish}           
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <S.LoginInput
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <S.PasswordInput 
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                size="large"
                type="password"
              />
            </Form.Item>
            <S.LoginFooter>
              <S.LoginCheckbox>Ghi nhớ tôi</S.LoginCheckbox>
              <S.ForgotPasswordLink>Quên mật khẩu?</S.ForgotPasswordLink>
            </S.LoginFooter>
            <Form.Item>
              <S.LoginButton type="primary" htmlType="submit" block size="large">
                Đăng nhập
              </S.LoginButton>
            </Form.Item>
            <S.SignupText>
              Chưa có tài khoản? <S.SignupLink>Đăng ký</S.SignupLink>
            </S.SignupText>
          </Form>
        </S.LoginFormWrapper>
      </Col>

      <S.LoginImageContainer span={12}>
      </S.LoginImageContainer>
    </Row>
  );
};

export default Login;
