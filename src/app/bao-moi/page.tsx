'use client';

import React from 'react';
import Image from 'next/image';
import { Layout, Row, Col, Card } from 'antd';

const { Header, Content } = Layout;

interface Article {
  title: string;
  description: string;
  image: string;
  date: string;
}

const articles: Article[] = [
  {
    title: 'Công nghệ AI bùng nổ tại Việt Nam',
    description:
      'Các doanh nghiệp đang đẩy mạnh ứng dụng trí tuệ nhân tạo để tăng trưởng và tối ưu hoá hoạt động.',
    image: 'https://placekitten.com/800/400',
    date: '20/05/2024',
  },
  {
    title: 'Khởi nghiệp xanh thu hút đầu tư',
    description:
      'Nhiều dự án khởi nghiệp hướng tới bảo vệ môi trường đang nhận được sự quan tâm lớn từ các quỹ đầu tư.',
    image: 'https://placekitten.com/400/300',
    date: '18/05/2024',
  },
  {
    title: 'Giải pháp chuyển đổi số cho doanh nghiệp nhỏ',
    description:
      'Các chuyên gia chia sẻ những bước đi thực tế giúp doanh nghiệp nhỏ bắt đầu hành trình chuyển đổi số.',
    image: 'https://placekitten.com/401/301',
    date: '15/05/2024',
  },
];

const BaoMoi: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header
        style={{
          background: '#cf1322',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 24,
        }}
      >
        <h1 style={{ color: '#fff', margin: 0 }}>Trang Báo Mới</h1>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]}>
          {articles.map((article) => (
            <Col xs={24} sm={12} lg={8} key={article.title}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={article.title}
                    src={article.image}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                }
              >
                <h3>{article.title}</h3>
                <p style={{ color: '#888', marginBottom: '8px' }}>{article.date}</p>
                <p>{article.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default BaoMoi;

