// styled.js
import styled from 'styled-components';
import { Input, Button, Checkbox, Typography, Col } from 'antd';

const { Text, Title, Link } = Typography;

export const LoginFormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const HighlightText = styled.span`
   background: linear-gradient(90deg, rgba(77, 98, 229, 1), rgba(135, 221, 238, 1), rgba(182, 240, 156, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LoginSubtitle = styled(Text)`
  color: #bbb;
  display: block;
  margin-bottom: 30px;
`;

export const LoginInput = styled(Input)`
  padding: 10px;
  border: 2px solid #ccc;
  transition: border 0.3s ease;
  background-color: rgba(26, 29, 33, 1) !important;
  color:rgba(205, 206, 207, 1);

  &:hover {
    background-color: rgba(26, 29, 33, 1) !important;
    border: linear-gradient(90deg, rgba(77, 98, 229, 1), rgba(135, 221, 238, 1), rgba(182, 240, 156, 1)) 1;
  }
  & .ant-input::placeholder {
    color: rgba(205, 206, 207, 1);
  }

`;

export const PasswordInput = styled(Input.Password)`
   padding: 10px;
  border: 2px solid #ccc;
  transition: border 0.3s ease;
  background-color: rgba(26, 29, 33, 1) !important;
  color:rgba(205, 206, 207, 1);

  &:hover {
    background-color: rgba(26, 29, 33, 1) !important;
    border: linear-gradient(90deg, rgba(77, 98, 229, 1), rgba(135, 221, 238, 1), rgba(182, 240, 156, 1)) 1;
  }
  & .ant-input::placeholder {
    color: rgba(205, 206, 207, 1);
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginCheckbox = styled(Checkbox)`
  color: #bbb;
`;

export const ForgotPasswordLink = styled(Link)`
  color: #00bcd4;
`;

export const LoginButton = styled(Button)`
  background: #B6F09C;
  border: none;
  padding: 8px 24px 8px 24px;
  margin-top: 12px;
`;

export const SignupText = styled(Text)`
  color: #bbb;
  display: block;
  text-align: center;
`;

export const SignupLink = styled.span`
  color: #B6F09C;
`;

export const LoginImageContainer = styled(Col)`
  background: url('/images/Illustration.png') no-repeat center center;
  background-size: cover;
  position: relative;
  height: 720px;
  width: auto;
  max-width: 100%;
`;

export const LoginQuote = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
`;

export const QuoteTitle = styled(Title)`
  color: #fff;
`;

export const QuoteText = styled(Text)`
  display: block;
  margin-bottom: 10px;
`;
